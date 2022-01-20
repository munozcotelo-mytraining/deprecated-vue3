import * as vue from "vue";

function genText( value : string | number, name : string | undefined,  modifiers : Record<string, boolean> ) : string {

    value = JSON.stringify( value );

    let output : string = "";

    if ( name ) {
        output = `AmgarciaDirective - Nombre del argumento : ${ name }, valor del argumento : ${ value }`;
    } else {
        output = `AmgarciaDirective - Sin nombre argumento, valor del argumento : ${ value }`;
    }

    if ( modifiers ) {
        output += `, Modificadores: ${ JSON.stringify( modifiers ) }`;
    }

    return output;

}

const amgarciaDirective : vue.Directive = {

    created ( el : HTMLElement, binding : vue.DirectiveBinding, vNode : vue.VNode ) {

        // console.info( "created", el );
        console.info( "created", binding );
        // console.info( "created", vNode );

        el.innerText = genText( binding.value, binding.arg, binding.modifiers );

    },

    beforeMount ( el : HTMLElement, binding : vue.DirectiveBinding, vNode : vue.VNode ) {

        // console.info( "beforeMount", el );
        console.info( "beforeMount", binding );
        // console.info( "beforeMount", vNode );

    },

    mounted ( el : HTMLElement, binding : vue.DirectiveBinding, vNode : vue.VNode ) {

        // console.info( "mounted", el );
        console.info( "mounted", binding );
        // console.info( "mounted", vNode );

    },

    beforeUpdate ( el : HTMLElement, binding : vue.DirectiveBinding, vNode : vue.VNode, pVNode : vue.VNode ) {

        // console.info( "beforeUpdate", el );
        console.info( "beforeUpdate", binding );
        console.info( "beforeUpdate", vNode );
        console.info( "beforeUpdate", pVNode );

    },

    updated ( el : HTMLElement, binding : vue.DirectiveBinding, vNode : vue.VNode, pVNode : vue.VNode ) {

        // console.info( "updated", el );
        console.info( "updated", binding );
        // console.info( "updated", vNode );
        // console.info( "updated", pVNode );

        el.innerText = genText( binding.value, binding.arg, binding.modifiers );

    },

    beforeUnmount ( el : HTMLElement, binding : vue.DirectiveBinding, vNode : vue.VNode ) {

        // console.info( "beforeUnmount", el );
        console.info( "beforeUnmount", binding );
        // console.info( "beforeUnmount", vNode );

    },

    unmounted ( el : HTMLElement, binding : vue.DirectiveBinding, vNode : vue.VNode ) {

        // console.info( "unmounted", el );
        console.info( "unmounted", binding );
        // console.info( "unmounted", vNode );

    },

};

export { amgarciaDirective };
