<template>
<div class="question-box-container">
    <b-jumbotron>
        <template slots="lead">
            {{ currentQuestion.question}}
        </template>
        <hr class ="my-4"/>
        
        <b-list-group>
            <b-list-group-item 
            v-for="(ans, index) in shuffledAnswers" :key="index" 
            @click.prevent="selectAnswer(index)"
            :class="[
            !answered && selectedIndex===index ? 'selected' : 
            answered && correctIndex===index ? 'correct' :
            answered && selectedIndex===index && correctIndex!==index ? 'incorect' :''
            ]"
            >
            {{ans}}</b-list-group-item>
        </b-list-group>

        <b-button 
        variant="primary"
        @click="submitAnswer"
        :disabled="selectedIndex===null || answered"
        >Submit</b-button>
        <b-button @click="next" variant="success" href="#">Next</b-button>
    </b-jumbotron>
</div>


</template>

<script>
import _ from 'lodash'
export default {
    props:{
        currentQuestion: Object,
        next: Function,
        increment: Function,
        
    },
    data() {
        return {
            selectedIndex:null,
            correctIndex:null,
            shuffledAnswers:[],
            answered:false
        }
    },
    computed: {
        answers() {
            let answers= [...this.currentQuestion.incorrect_answers]
            answers.push(this.currentQuestion.correct_answer)
            return answers
        }
    },
    watch: {
        currentQuestion: {
            immediate: true,
            handler() {
                this.answered=null
                this.selectedIndex=null
                this.shuffleAnswers()
            }
        }
        
    },
    methods: {
        selectAnswer(index){
            console.log(index)
            this.selectedIndex=index
        },
        shuffleAnswers(){
            let answers= [...this.currentQuestion.incorrect_answers,this.currentQuestion.correct_answer]
            this.shuffledAnswers= _.shuffle(answers)
            this.correctIndex=this.shuffledAnswers.indexOf(this.currentQuestion.correct_answer);
            

        },
        submitAnswer(){
            let isCorrect=false
            if(this.selectedIndex=== this.correctIndex){
                isCorrect=true;
            }
            this.answered=true
            this.increment(isCorrect)
        }
    },
    mounted() {
        console.log(this.currentQuestion)
        //this.shuffleAnswers()
    }

}
</script>

<style scoped>
.list-group{
    margin-bottom: 15px;
}
.list-group-item:hover{
    background: aquamarine;
    cursor: pointer;
}
.btn {
    margin: 0 5px;
}

.selected{
    background-color: lightblue
}
.correct{
    background-color: lightgreen
}
.incorect{
    background-color: red
}
</style>