const app = new Vue({
  el: '#app',
  data: {
    message: 'Hello World!',
  },
});

const app2 = new Vue({
  el: '#app-2',
  data: {
    message: `You loaded this page on ${new Date().toLocaleString()}`,
  },
});

const app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true,
  },
});

const app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      { text: 'Learn JavaScript' },
      { text: 'Learn Vue' },
      { text: 'Build something awesome' },
    ],
  },
});

const app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'Hello Vue.js!',
  },
  methods: {
    reverseMessage() {
      this.message = this.message.split('').reverse().join('');
    },
  },
});

const app6 = new Vue({
  el: '#app-6',
  data: {
    message: 'Hello Vue!',
  },
});

Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{todo.text}}</li>',
});

const app7 = new Vue({
  el: '#app-7',
  data: {
    groceryList: [
      { id: 0, text: 'Vegetables' },
      { id: 1, text: 'Cheese' },
      { id: 2, text: 'Tomato' },
    ],
  },
});

const app8 = new Vue({
  el: '#app-8',
  data: {
    firstName: 'Javi',
    lastName: 'Laso'
  },
  computed: {
    fullName: {
      get: function() {
        return `${this.firstName} ${this.lastName}`
      },
      set: function(newName) {
        [this.firstName, this.lastName] = newName.split(' ')
      }
    }
  }
})

const app9 = new Vue({
  el: '#app-9',
  data: {
    sets: [[1, 2, 3, 4, 5],[6, 7, 8, 9, 10]]
  },
  methods: {
    even(numbers) {
      return numbers.filter((number) => number % 2 === 0)
    }
  }
})

const app10 = new Vue({
  el: '#app-10',
  data: {
      counter: 0
    }
})

const app11 = new Vue({
  el: '#app-11',
  data: {
    name: 'Javi'
  },
  methods: {
    greet(event) {
      alert(`Hello ${this.name}!`)
      if (event) {
        console.log(event.target)
      }
    }
  }
})
