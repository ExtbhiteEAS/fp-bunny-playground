import { logger } from "@vendetta";
import { safeFetch } from "@vendetta/utils";
import { showToast } from "@vendetta/ui/toasts";
import Settings from "./Settings";

let data;
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
}

export const onUnload = () => unpatch?.()

export const settings = Settings;