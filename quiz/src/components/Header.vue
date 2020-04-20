<template>
    <div>
        <b-nav tabs>
            <b-nav-item disabled><b>Fancy quiz app</b></b-nav-item>
            <b-nav-item disabled><b>Counter: {{numCurrect}}/{{numberTotal}}</b></b-nav-item>
        </b-nav>
    </div>
</template>

<script>
export default {
    props:[
        'numCurrect',
        'numberTotal'
    ]
}
</script>