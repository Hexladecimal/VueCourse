export const fruitMixin = {
    //  You must  use a mixin before a component because the mixin can't destory an instance
        data() {
            return {
                fruits: ['Apple', 'Banana', 'Mango', 'Melon'],
                filterText: ''
            }
        },
        computed: {
            filteredFruits() {
                return this.fruits.filter((element) => {
                    return element.match(this.filterText);
                });
            }
        },
        created() {
            console.log('Created')
        }
}