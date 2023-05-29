export interface PodcastDto {
  wrapperType: string;
  kind: string;
  collectionId: number;
  trackId: number;
  artistName: string;
  collectionName: string;
  trackName: string;
  collectionCensoredName: string;
  trackCensoredName: string;
  collectionViewUrl: string;
  feedUrl: string;
  trackViewUrl: string;
  artworkUrl30: string;
  artworkUrl60: string;
  artworkUrl100: string;
  collectionPrice: number;
  trackPrice: number;
  collectionHdPrice: number;
  releaseDate: string;
  collectionExplicitness: string;
  trackExplicitness: string;
  trackCount: number;
  trackTimeMillis: number;
  country: string;
  currency: string;
  primaryGenreName: string;
  artworkUrl600: string;
  genreIds: string[];
  genres: string[];
}

export interface FeedDto {
  author: AuthorDto;
  entry: EntryDto[];
  updated: IconDto;
  rights: IconDto;
  title: IconDto;
  icon: IconDto;
  link: LinkDto[];
  id: IconDto;
}

export interface AuthorDto {
  name: IconDto;
  uri: IconDto;
}

export interface IconDto {
  label: string;
}

export interface EntryDto {
  'im:name': IconDto;
  'im:image': IMImageDto[];
  summary: IconDto;
  'im:price': IMPriceDto;
  'im:contentType': IMContentTypeDto;
  rights?: IconDto;
  title: IconDto;
  link: LinkDto;
  id: IDDto;
  'im:artist': IMArtistDto;
  category: CategoryDto;
  'im:releaseDate': IMReleaseDateDto;
}

export interface CategoryDto {
  attributes: CategoryAttributesDto;
}

export interface CategoryAttributesDto {
  'im:id': string;
  term: CategoryTypeDto;
  scheme: string;
  label: CategoryTypeDto;
}

export enum CategoryTypeDto {
  Music = 'Music',
  MusicCommentary = 'Music Commentary',
  MusicHistory = 'Music History',
  MusicInterviews = 'Music Interviews'
}

export interface IDDto {
  label: string;
  attributes: IDAttributesDto;
}

export interface IDAttributesDto {
  'im:id': string;
}

export interface IMArtistDto {
  label: string;
  attributes?: IMArtistAttributesDto;
}

export interface IMArtistAttributesDto {
  href: string;
}

export interface IMContentTypeDto {
  attributes: IMContentTypeAttributesDto;
}

export interface IMContentTypeAttributesDto {
  term: ContentTypeDto;
  label: ContentTypeDto;
}

export enum ContentTypeDto {
  Podcast = 'Podcast'
}

export interface IMImageDto {
  label: string;
  attributes: IMImageAttributesDto;
}

export interface IMImageAttributesDto {
  height: string;
}

export interface IMPriceDto {
  label: IMPriceLabelDto;
  attributes: IMPriceAttributesDto;
}

export interface IMPriceAttributesDto {
  amount: string;
  currency: CurrencyDto;
}

export enum CurrencyDto {
  Usd = 'USD'
}

export enum IMPriceLabelDto {
  Get = 'Get'
}

export interface IMReleaseDateDto {
  label: string;
  attributes: IconDto;
}

export interface LinkDto {
  attributes: LinkAttributesDto;
}

export interface LinkAttributesDto {
  rel: LinkRelDto;
  type?: LinkTypeDto;
  href: string;
}

export enum LinkRelDto {
  Alternate = 'alternate',
  Self = 'self'
}

export enum LinkTypeDto {
  TextHTML = 'text/html'
}
