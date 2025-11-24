export type CollectionTattoo =
  | 'col1-size1'
  | 'col1-size2'
  | 'col1-size3'
  | 'col2-size'
  | 'col3-size1'
  | 'col3-size2'
  | 'col3-size3'

export interface TattooItem {
  id: string;
  name: string;
  image: string;
  category?: string;
  description?: string;
}

export interface TattooItemProps {
  tattoo: TattooItem;
  index: number;
  sizeClass: CollectionTattoo;
  onSelect: (index: number) => void;
}