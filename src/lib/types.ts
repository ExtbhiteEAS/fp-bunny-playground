export interface Badge {
    asset: string;
    description: string;
    icon: string;
    link?: string;
}

export interface DecorationData {
    asset: string;
    skuId: string;
    animated: boolean;
}
export interface AvatarDecoration {
    asset: string;
    skuId: string;
    animated: boolean;
}

export interface UserProfileData {
    profile_effect: string;
    banner: string;
    avatar: string;
    badges: Badge[];
    decoration: DecorationData;
}

export interface Colors {
    primary: number;
    accent: number;
}

export interface fakeProfileSectionProps {
    hideTitle?: boolean;
    hideDivider?: boolean;
    noMargin?: boolean;
}