export const initialState = {
    basket: [
        {   id: 235568,
            title :"the lean startup",
            price: 220,
            rating :5,
            image : "https://m.media-amazon.com/images/I/61zuBm-jisL._AC_SY200_.jpg"
        },
         {  id: 125568,
            title :"the lean startup",
            price: 220,
            rating :5,
            image : "https://m.media-amazon.com/images/I/61zuBm-jisL._AC_SY200_.jpg"
        }
    ],
    user: null,
};

function reducer(state, action) {
    console.log(action)
    switch(action.type){
        case 'ADD_TO_BASKET':
            //logic for add to basket
            return { 
                ...state,
                basket: [...state.basket, action.item]
             }
            

        case 'REMOVE_FROM_BASKET':
            //logic for remove from basket
            let newBasket = [...state.basket];
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);
            if (index >= 0){
                //item exits in basket in basket,remove it...
                newBasket.splice(index,1);
            }else{
                console.warn('Cant remove produduct (id: ${action.id}) as it not in basket');
            }
            return { ...state , basket: newBasket}
            
        default:
            return state;
    }
}
export default reducer;