<<template>
    <div class="container">
        <h2>Newsletter Anmeldung</h2>
        <div class="user-input">
            <input
                    placeholder="Email Adresse"
                    v-model="input"
                    @keyup.enter="addItem"
                    ref="input"
            /><button @click="addItem">Anmelden</button>
        </div>

        <ul v-if="shoppingList">
            <li v-for="item in shoppingList" :key="item" class="item"
            ><span>{{ item }} wurde erfolgreich angemeldet!</span>

            </li>
        </ul>

        <br />
    </div>
</template>

<script>
    export default {
        data() {
            return {
                input: '',
                shoppingList: [],
            }
        },
        methods: {
            addItem() {
                // Don't allow adding to the list if empty
                if (!this.input) return
                this.shoppingList.push(this.input)
                // Clear the input after adding
                this.input = ''
                // Focus the input element again for quick typing!
                this.$refs.input.focus()
            }
        },
    }
</script>

<style lang="scss">
    $color-green: #4fc08d;
    $color-grey: #2c3e50;

    .container {
        max-width: 600px;


    }

    .item {
        display: flex;
        justify-content: space-between;
    }

    // Type
    .h2 {
        font-size: 21px;
    }

    .user-input {
        display: flex;
        align-items: center;
        padding-bottom: 20px;
        input {
            width: 100%;
            padding: 10px 6px;
            margin-right: 10px;
        }
    }

    .item {
        display: flex;
        align-items: center;
    }

    // Buttons
    button {
        appearance: none;
        padding: 10px;

        font-weight: bold;
        border-radius: 10px;
        border: none;
        background: $color-grey;
        color: white;
        white-space: nowrap;

        + button {
            margin-left: 10px;
        }
    }

    .button--delete {
        display: block;
        margin: 0 auto;
        background: red;
    }

    .button--remove {
        background: none;
        color: red;
        text-transform: uppercase;
        font-size: 11px;
        align-self: flex-end;
    }

    ul {
        display: block;
        margin: 0 auto;
        padding: 30px;
        border: 1px solid rgba(0, 0, 0, 0.25);

        > li {
            color: $color-grey;
            margin-bottom: 4px;
        }
    }

    .box{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        margin: 0 20vw;

    }
    img {
        margin: 3vh 0 10vh 0;
    }
</style>

