import mutations from "@/store/modules/articles/mutations";
import actions from "@/store/modules/articles/actions";
import getters from "@/store/modules/articles/getters";

export default {
    namespaced: true,
    state() {
        return {
            articles:[
                {   id: new Date().getTime(),
                    title:"Na Chebzie i nazot",
                    category:"Tatry",
                    distance:"2km",
                    description:"Jak se iść na Chebzie co by się nie zmęczyć",
                    mainPhoto: "ok2",
                    content: "Tu będzie wygenerowany kontent",
                    tripDate: new Date() },
                {   id: new Date().getTime() + 10,
                    title:"W pogoni za dawnym laskiem",
                    category:"Tatry",
                    distance:"4km",
                    description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum accusamus ullam nihil enim saepe itaque ad quis modi eligendi qui voluptatum animi, magni ducimus harum numquam similique incidunt inventore laboriosam.",
                    mainPhoto: "ok",
                    content: "Tu będzie wygenerowany kontent",
                    tripDate: new Date()},
                {   id: new Date().getTime() + 20,
                    title:"Do Jaworzna",
                    category:"Mała Fatra",
                    distance:"60km",
                    description:"Tam skąd ludzie tak szybko nie wracają, o ile wgl wracają",
                    mainPhoto: "ok2",
                    content: "Tu będzie wygenerowany kontent",
                    tripDate: new Date()},
                {   id: new Date().getTime() + 30,
                    title:"Trzy Szczyty - Kriźna, Ostredok i Plośka",
                    category:"Mała Fatra",
                    distance:"7,6km",
                    description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum accusamus ullam nihil enim saepe itaque ad quis modi eligendi qui voluptatum animi, magni ducimus harum numquam similique incidunt inventore laboriosam.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum accusamus ullam nihil enim saepe itaque ad quis modi eligendi qui voluptatum animi, magni ducimus harum numquam similique incidunt inventore laboriosam.",
                    mainPhoto: "ok",
                    content: "Tu będzie wygenerowany kontent",
                    tripDate: new Date()}
            ],
        }
    },
    mutations: mutations,
    actions: actions,
    getters: getters
}
