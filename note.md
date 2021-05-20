# 1. what is ref in vueJS
```js
import { ref } from 'vue'

//how use
const tags = ref([])
```
## 1. ans: composition api ke reactive korar jonno ref use kora hoy 

# composition api 
```js
setup(){ // alwase run first  & this is composition api 
// everything define inside setup method mens 

// but it is not provide reactive value 
    return{
        
    }

}

// composition api ke reactive korar jonno ref use kora hoy 

data(){// it is alwase provide reactive value 
return {
    name: 'tauhidul',
    age: 23
}
}
```


![Screenshot 2021-05-20 at 7 52 43 AM](https://user-images.githubusercontent.com/10520882/118927032-0911e280-b963-11eb-882c-5890a17776d0.png)
![Screenshot 2021-05-20 at 7 37 51 AM](https://user-images.githubusercontent.com/10520882/118927049-0e6f2d00-b963-11eb-9e03-362fe192a01e.png)
![Screenshot 2021-05-20 at 7 33 56 AM](https://user-images.githubusercontent.com/10520882/118927058-10d18700-b963-11eb-83d7-ed59c6a2367f.png)
![Screenshot 2021-05-20 at 7 19 23 AM](https://user-images.githubusercontent.com/10520882/118927065-1202b400-b963-11eb-8d2e-b70c587707b0.png)
![Screenshot 2021-05-20 at 7 18 05 AM](https://user-images.githubusercontent.com/10520882/118927069-1333e100-b963-11eb-9ca2-483af787cd5d.png)
![Screenshot 2021-05-20 at 7 17 37 AM](https://user-images.githubusercontent.com/10520882/118927081-16c76800-b963-11eb-9362-1e3c25c76eaa.png)
![Screenshot 2021-05-20 at 7 17 27 AM](https://user-images.githubusercontent.com/10520882/118927088-17f89500-b963-11eb-94a3-a8053a50c69b.png)

# What are the lifecycle methods of VueJS?

