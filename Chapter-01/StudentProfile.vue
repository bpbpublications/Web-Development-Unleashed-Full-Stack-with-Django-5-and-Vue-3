<template> 
<div> 
<h2>{{ student.name }}</h2> 
<p>Email: {{ student.email }}</p> 
<ul> 
<li v-for="course in student.courses" :key="course.id">{{ course.name }}</li> 
</ul> 
</div> 
</template> 
<script> 
import { ref } from 'vue'; 
export default { 
setup() { 
const student = ref({ 
name: 'John Doe', 
email: 'johndoe@example.com', 
courses: [ 
{ id: 1, name: 'Course 1' }, 
{ id: 2, name: 'Course 2' }, 
{ id: 3, name: 'Course 3' } 
] 
}); 
return { student }; 
} 
} 
</script> 
