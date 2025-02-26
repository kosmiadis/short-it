import { createContext, ReactNode, useContext } from "react";
import { Url } from "../types/Url";
import { queryClient } from "../query/queryClient";
import { useAuth } from "./AuthProvider";
import { useQuery } from "@tanstack/react-query";

interface UrlsLoaderProviderContext {
    urls: Url[],
    refetchUrls: () => void,
    isLoadingUrls: boolean
}

export const UrlsLoaderCtx = createContext<UrlsLoaderProviderContext>({
    urls: [],
    isLoadingUrls: true,
    refetchUrls: () => {}
})

export const useUrls = (): UrlsLoaderProviderContext => useContext(UrlsLoaderCtx);


export default function UrlsLoaderProvider ({children}: {children: ReactNode}) { 

    const {isAuthorized} = useAuth();

    const { data, isPending } = useQuery({
        queryKey: ['urls'],
        queryFn: loadUrls,
        staleTime: 1000 * 60 * 5, // Cache for 5 minutes
        enabled: isAuthorized
    })

    function refetchUrls () {
        queryClient.invalidateQueries({ queryKey: ['urls']})        
    }

    const urlsValue: UrlsLoaderProviderContext = {
        urls: data?.urls || [],
        refetchUrls,
        isLoadingUrls: isPending
    }

    return <UrlsLoaderCtx.Provider value={urlsValue}>
        {children}
    </UrlsLoaderCtx.Provider>
}

async function loadUrls (): Promise<Url[]> {
    const req = await fetch('http://localhost:3000/urls-details', {
        method: "GET",
        credentials: 'include',
    });
    if (!req.ok) {
        throw await req.json();
    }
    return await req.json();
};

