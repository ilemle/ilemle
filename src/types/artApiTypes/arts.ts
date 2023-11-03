export interface IProduct {
    api_link: string
    artist_ids: number[]
    artwork_ids: number[]
    description: string
    exhibition_ids: number[]
    external_sku: number
    id: number
    image_url: string
    max_compare_at_price: number
    max_current_price: number
    min_compare_at_price: number
    min_current_price: number
    price_display: string
    source_updated_at: string
    timestamp: string
    title: string
    updated_at: string
    web_url: string
}

export type ArtNavigationParamsType = Pick<IProduct, 'id' | 'image_url' | 'title' | 'description'>

