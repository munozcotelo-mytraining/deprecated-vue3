<template>

    <div class="component">

        <h2>Formularios ( & v-model)</h2>

        <div>
            <span><strong>Text</strong></span>
            <input v-model="text_message" placeholder="edit me" />
            <p>Message is: {{ text_message }}</p>
        </div>

        <hr />

        <div>
            <span><strong>Text area</strong></span>
            <p style="white-space: pre-line;">{{ area_message }}</p>
            <br />
            <textarea v-model="area_message" placeholder="add multiple lines"></textarea>
        </div>

        <hr />

        <div>
            <span><strong>Checkbox</strong></span>
            <br />
            <input type="checkbox" id="checkbox" v-model="theCheckbox"/>
            <label for="checkbox">{{ theCheckbox }}</label>
        </div>

        <hr />

        <div>
            <span><strong>Multiple Checkboxes</strong></span>
            <br />
            <input type="checkbox" id="jack" value="Jack" v-model="checkedNames" />
            <label for="jack">Jack</label>
            <input type="checkbox" id="john" value="John" v-model="checkedNames" />
            <label for="john">John</label>
            <input type="checkbox" id="mike" value="Mike" v-model="checkedNames" />
            <label for="mike">Mike</label>
            <br />
        </div>

        <hr />

        <div>
            <span><strong>Radio Button</strong></span>
            <br />
            <input type="radio" id="one" value="One" v-model="theRadio" />
            <label for="one">One</label>
            <br />
            <input type="radio" id="two" value="Two" v-model="theRadio" />
            <label for="two">Two</label>
            <br />
            <span>Picked: {{ theRadio }}</span>
            <br />
        </div>

        <hr />

        <div>
            <span><strong>Select</strong></span>
            <br />
            <select v-model="theSelect">
                <option disabled value="">Please select one</option>
                <option>A</option>
                <option>B</option>
                <option>C</option>
            </select>
            <span>Selected: {{ theSelect }}</span>
        </div>

        <hr />

        <div>
            <span><strong>Multiple Select</strong></span>
            <br />
            <select v-model="theMultipleSelect" multiple>
                <option disabled value="">Please select one</option>
                <option>AA</option>
                <option>BB</option>
                <option>CC</option>
            </select>
            <span>Selected: {{ theMultipleSelect }}</span>

            <br/>

            <span><strong>Multiple Select con options como For</strong></span>
            <br />
            <select v-model="theMultipleSelectFor" multiple>
                <option v-for="option in optionsFor" v-bind:key="option.text" v-bind:value="option.value">
                    {{ option.text }}
                </option>
            </select>
            <span>Selected: {{ theMultipleSelectFor }}</span>

        </div>

        <hr />

        <div>
            <span><strong>v-bind in checkbox, select y radio</strong></span>
            <br />
            <br />

            <span>Checkbox (cuando queremos que no tenga value true o false)</span>
            <input type="checkbox" id="checkbox" v-model="theCheckboxBind" true-value="sipi" false-value="nope"/>
            <label for="checkbox">{{ theCheckboxBind }}</label>
            <br />
            <br />

            <span><strong>Radio Button con valor dinámico</strong></span>
            <br />
            <input type="radio" id="any" v-model="theRadioBind" v-bind:value="aValueForRadio" />
            <label for="any">Value: {{theRadioBind}}</label>
            <br />

            <span><strong>Multiple Select con options como objeto y en For</strong></span>
            <br />
            <select v-model="theMultipleSelectObjectFor" multiple>
                <option v-for="option in optionsObjectFor" v-bind:key="option.text" v-bind:value="option.value">
                    {{ option.text }}
                </option>
            </select>
            <span>Selected: {{ theMultipleSelectObjectFor }}</span>


        </div>

        <hr />

        <div>
            <p>CustomInput : {{ customInput }}</p>
            <CustomInputComponent v-model="customInput" />
        </div>

    </div>

</template>

<script lang="ts">

import FormulariosComponent from "./../../typescript/ui/FormulariosComponent";
export default FormulariosComponent;

</script>
