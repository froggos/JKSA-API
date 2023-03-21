export interface IUsuario {
    _id: string;
    username: string;
    password?: string;
    profilename: string,
    profile_picture: string,
    medals: string[];
    elo: number;
    ranking: boolean;
    settingstring: string;
}