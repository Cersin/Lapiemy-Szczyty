import mutations from "@/store/modules/articles/mutations";
import actions from "@/store/modules/articles/actions";
import getters from "@/store/modules/articles/getters";

export default {
    namespaced: true,
    state() {
        return {
            articles:[
                {   title:"Na Chebzie i nazot",
                    category:"Pieszo",distance:"2km",
                    description:"Jak se iść na Chebzie co by się nie zmęczyć",
                    mainPhoto: "ok2",
                    timestamp: new Date().getTime(),
                    content: "Tu będzie wygenerowany kontent",
                    tripDate: new Date() },
                {   title:"W pogoni za dawnym laskiem",
                    category:"Rowerek",
                    distance:"4km",
                    description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum accusamus ullam nihil enim saepe itaque ad quis modi eligendi qui voluptatum animi, magni ducimus harum numquam similique incidunt inventore laboriosam.",
                    mainPhoto: "ok",
                    timestamp: new Date().getTime(),
                    content: "Tu będzie wygenerowany kontent",
                    tripDate: new Date()},
                {   title:"Do Jaworzna",
                    category:"Brum brum",
                    distance:"60km",
                    description:"Tam skąd ludzie tak szybko nie wracają, o ile wgl wracają",
                    mainPhoto: "ok2",
                    timestamp: new Date().getTime(),
                    content: "Tu będzie wygenerowany kontent",
                    tripDate: new Date()},
                {   title:"Trzy Szczyty - Kriźna, Ostredok i Plośka",
                    category:"Wycieczki, Słowacja",
                    distance:"7,6km",
                    description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum accusamus ullam nihil enim saepe itaque ad quis modi eligendi qui voluptatum animi, magni ducimus harum numquam similique incidunt inventore laboriosam.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum accusamus ullam nihil enim saepe itaque ad quis modi eligendi qui voluptatum animi, magni ducimus harum numquam similique incidunt inventore laboriosam.",
                    mainPhoto: "ok",
                    timestamp: new Date().getTime(),
                    content: "Tu będzie wygenerowany kontent",
                    tripDate: new Date()}
            ],
        }
    },
    mutations: mutations,
    actions: actions,
    getters: getters
}
