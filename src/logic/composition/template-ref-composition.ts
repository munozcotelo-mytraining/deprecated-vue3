import * as vue from "vue";

import Hijo1 from "./../components/typescript/ui/provideinject/Hijo1";

interface ITemplateRefCompositionApi {

    reference : vue.Ref<InstanceType<typeof Hijo1>>;
    header    : vue.Ref<HTMLElement>;

}

function templateRefCompositionApi() : ITemplateRefCompositionApi {

    const reference : vue.Ref<InstanceType<typeof Hijo1>> = vue.ref<InstanceType<typeof Hijo1>>( null as any );
    const header    : vue.Ref<HTMLElement> = vue.ref<HTMLElement>( null as any );

    vue.onMounted( () => {

        console.log( "·························", reference.value, reference.value.sayHello() );
        console.log( "·························", header.value );

    } );

    return {

        reference : reference,
        header    : header,

    };

};

export { templateRefCompositionApi };
