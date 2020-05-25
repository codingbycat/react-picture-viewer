import { IPicture } from '@/components/bussniess/PictureViewer/interface';
export interface IState {
    layerShown: boolean;
    picturesList: IPicture[];
    pictureOrder: number;
    imgScale: number;
    imgRotate: number;
}
interface initialProps {
    picturesList: IPicture[];
}
export declare const initialState: ({ picturesList }: initialProps) => IState;
export {};