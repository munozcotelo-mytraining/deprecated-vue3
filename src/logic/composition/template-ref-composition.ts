import * as vue from "vue";

interface ITemplateRefCompositionApi {
    reference : vue.Ref<HTMLElement | vue.Component>;
    header : vue.Ref<HTMLElement | vue.Component>;
}

function templateRefCompositionApi() : ITemplateRefCompositionApi {

    const reference : vue.Ref<HTMLElement | vue.Component> = vue.ref( null as any );
    const header    : vue.Ref<HTMLElement | vue.Component> = vue.ref( null as any );

    vue.onMounted(() => {
        console.log( "·························", reference.value);
        console.log( "·························", header.value);
    })

    return {
        reference : reference,
        header    : header,
    };

};

export { templateRefCompositionApi };
