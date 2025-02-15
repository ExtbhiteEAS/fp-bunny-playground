import { logger } from "@vendetta";
import { safeFetch } from "@vendetta/utils";
import { showToast } from "@vendetta/ui/toasts";
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
    // remove this comma if it is necessary.
    // await fetchData();
    if (!data) {
        return showToast('This plugin is a playground thing. Use this: https://fakeprofile.sampath.tech');
    }
}

export const onUnload = () => unpatch?.()

export const settings = Settings;