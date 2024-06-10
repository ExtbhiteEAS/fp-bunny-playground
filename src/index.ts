import { logger } from "@vendetta";
import { safeFetch } from "@vendetta/utils";
import { showToast } from "@vendetta/ui/toasts";
import { getAssetIDByName } from "@vendetta/ui/assets";
import { UserProfileData } from "./lib/types";
import Settings from "./Settings";

let data: UserProfileData;
let unpatch: () => void;

export const fetchData = async () => {
    try {
        data = await (await safeFetch("https://i.sampath.tech/v3/users/fakeProfile", { cache: "no-store" })).json();
        return data;
    } catch (e) {
        logger.error("Failed to fetch fakeProfile data", e);
    }
}

export const onLoad = async () => {
    await fetchData();
    if (!data) {
        return showToast('Failed to load fakeProfile database');
    }
    showToast("This plugin is not finished result of fakeProfile. This is playground plugin special for fakeProfile development for mobile.", getAssetIDByName("check"))
}

export const onUnload = () => unpatch?.()

export const settings = Settings;