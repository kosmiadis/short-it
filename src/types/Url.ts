export type Url = {
    _id: string,
    original_url: string,
    shortened_url: string,
    created_by: string,
    status: 'active' | 'inactive',
    created_at: string,
}