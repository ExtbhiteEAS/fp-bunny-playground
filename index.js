(function(a,o,u,l,e,s,n,f){"use strict";const h=f.findByStoreName("UserStore"),{ScrollView:d}=s.General,{FormText:r,FormSection:g,FormRow:t}=s.Forms,c=h.getCurrentUser();function p(){return e.React.createElement(d,null,e.React.createElement(g,null,e.React.createElement(r,null,"This plugin is not finished result of fakeProfile, finished and full than this. This is just playground plugin special for fakeProfile development for mobile."),e.React.createElement(r,null),e.React.createElement(r,null,"ID: ",c.id),e.React.createElement(r,null,"Username: ",c.username),e.React.createElement(t,{label:"GitHub",leading:e.React.createElement(t.Icon,{source:n.getAssetIDByName("Discord")}),trailing:t.Arrow,onPress:function(){return e.url.openDeeplink("https://github.com/sampathgujarathi/fakeProfile")}}),e.React.createElement(t,{label:"Discord Server",leading:e.React.createElement(t.Icon,{source:n.getAssetIDByName("Discord")}),trailing:t.Arrow,onPress:function(){return e.url.openDeeplink("https://discord.gg/ffmkewQ4R7")}}),e.React.createElement(t,{label:"Refetch fakeProfile",leading:e.React.createElement(t.Icon,{source:n.getAssetIDByName("ic_message_retry")}),trailing:t.Arrow,onPress:async function(){return l.showToast("Refetched fakeProfile, but it is playground plugin. Nothing happend.",n.getAssetIDByName("check"))}})))}let i,R;const y=async function(){try{return i=await(await u.safeFetch("https://i.sampath.tech/v3/users/fakeProfile",{cache:"no-store"})).json(),i}catch(m){o.logger.error("Failed to fetch fakeProfile data",m)}},k=async function(){if(!i)return l.showToast("This plugin is a playground thing. Use this: https://fakeprofile.sampath.tech")},D=function(){return R?.()},E=p;return a.fetchData=y,a.onLoad=k,a.onUnload=D,a.settings=E,a})({},vendetta,vendetta.utils,vendetta.ui.toasts,vendetta.metro.common,vendetta.ui.components,vendetta.ui.assets,vendetta.metro);
