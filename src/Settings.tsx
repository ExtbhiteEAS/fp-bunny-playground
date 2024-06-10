import { React, url } from "@vendetta/metro/common";
import { Forms, General } from "@vendetta/ui/components";
import { getAssetIDByName } from "@vendetta/ui/assets";
import { fetchData } from "./index";
import { showToast } from "@vendetta/ui/toasts";
import { UserStore } from "./lib/userStore";

const { ScrollView } = General;
const { FormText, FormSection, FormRow } = Forms;

const user = UserStore.getCurrentUser()

export default () => (<ScrollView>
    <FormSection>
        <FormText>This plugin is not finished result of fakeProfile, it'll coming soon in new repository, finished and full than this. This is just playground plugin special for fakeProfile development for mobile.</FormText>
        <FormText></FormText>
        <FormText>ID: {user.id}</FormText>
        <FormText>Username: {user.username}</FormText>
        <FormRow
            label = "GitHub"
            leading = {<FormRow.Icon source={getAssetIDByName("Discord")} />}
            trailing = {FormRow.Arrow}
            onPress = {() => url.openDeeplink("https://github.com/sampathgujarathi/fakeProfile")}
        />
        <FormRow
            label = "Discord Server"
            leading = {<FormRow.Icon source={getAssetIDByName("Discord")} />}
            trailing = {FormRow.Arrow}
            onPress = {() => url.openDeeplink("https://discord.gg/ffmkewQ4R7")}
        />
        <FormRow
            label = "Refetch fakeProfile"
            leading = {<FormRow.Icon source={getAssetIDByName("ic_message_retry")} />}
            trailing = {FormRow.Arrow}
            onPress = {async () => {
                // remove these commas if it is necessary.
                // const fetch = await fetchData();
                // if (!fetch) return showToast("Failed to refetch fakeProfile", getAssetIDByName("small"))
                return showToast("Refetched fakeProfile, but it is playground plugin. Nothing happend.", getAssetIDByName("check"))
            }}
        />
    </FormSection>
</ScrollView>)