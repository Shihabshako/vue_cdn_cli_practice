<template>
  <div>
    <div
      class="
        min-h-full
        flex
        items-center
        justify-center
        py-12
        px-4
        sm:px-6
        lg:px-8
      "
    >
      <div class="max-w-md w-full space-y-8">
        <div>
          <img
            class="mx-auto h-12 w-auto"
            src="../assets/logo.png"
            alt="Workflow"
          />
          <h2 class="mt-6 text-center text-3xl font-extrabold text-[#41B883]">
            Form Handling
          </h2>
        </div>
        <form class="mt-8 space-y-6" action="#" method="POST" @submit.prevent="formSubmit">
          <input type="hidden" name="remember" value="true" />
          <div class="rounded-md shadow-sm -space-y-px">
            <div>
              <label for="email-address" class="sr-only">Email address</label>
              <input
                id="email-address"
                name="email"
                type="email"
                autocomplete="email"
                required
                class="
                  appearance-none
                  rounded-none
                  relative
                  block
                  w-full
                  px-3
                  py-2
                  border border-gray-300
                  placeholder-gray-500
                  text-gray-900
                  rounded-t-md
                  focus:outline-none
                  focus:ring-[#41B883]
                  focus:border-[#41B883]
                  focus:z-10
                  sm:text-sm
                "
                placeholder="Email address"
                v-model="userData.email"
              />
            </div>
            <div>
              <label for="password" class="sr-only">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                autocomplete="current-password"
                required
                class="
                  appearance-none
                  rounded-none
                  relative
                  block
                  w-full
                  px-3
                  py-2
                  border border-gray-300
                  placeholder-gray-500
                  text-gray-900
                  focus:outline-none
                  focus:ring-[#41B883]
                  focus:border-[#41B883]
                  focus:z-10
                  sm:text-sm
                "
                placeholder="Password"
                v-model.lazy="userData.password"
              />
            </div>
            <div>
              <label for="age" class="sr-only">Age</label>
              <input
                id="age"
                name="age"
                type="number"
                required
                class="
                  appearance-none
                  rounded-none
                  relative
                  block
                  w-full
                  px-3
                  py-2
                  border border-gray-300
                  placeholder-gray-500
                  text-gray-900
                  focus:outline-none
                  focus:ring-[##41B883]
                  focus:border-[##41B883]
                  focus:z-10
                  sm:text-sm
                "
                placeholder="Age"
                v-model="userData.age"
              />
            </div>
            <div>
              <label for="message" class="sr-only">Message</label>
              <textarea
                id="message"
                name="message"
                cols="30"
                rows="3"
                required
                class="
                  appearance-none
                  rounded-none
                  relative
                  block
                  w-full
                  px-3
                  py-2
                  border border-gray-300
                  placeholder-gray-500
                  text-gray-900
                  focus:outline-none
                  focus:ring-[#41B883]
                  focus:border-[#41B883]
                  focus:z-10
                  sm:text-sm
                  rounded-b-md
                "
                placeholder="Message"
                v-model="userData.message"
                
              ></textarea>
            </div>
            <div class="flex items-center gap-5 !my-2">
              <div class="flex items-center">
                <input
                  id="sendMail"
                  name="sendMail"
                  value="sendMail"
                  type="checkbox"
                  class="
                    h-4
                    w-4
                    text-[#41B883]
                    focus:ring-[#41B883]
                    border-gray-300
                    rounded
                  "
                  v-model="userData.sendMail"
                />
                <label for="sendMail" class="ml-2 block text-sm text-gray-900">
                  Send Mail
                </label>
              </div>

              <div class="flex items-center">
                <input
                  id="infoMail"
                  name="infoMail"
                  value="sendInfoMail"
                  type="checkbox"
                  class="
                    h-4
                    w-4
                    text-[#41B883]
                    focus:ring-[#41B883]
                    border-gray-300
                    rounded
                  "
                   v-model="userData.sendMail"
                />
                <label for="infoMail" class="ml-2 block text-sm text-gray-900">
                  Send infoMail
                </label>
              </div>
            </div>

            <div class="!my-3">
              <div class="flex flex-wrap">
                <div class="flex items-center mr-4">
                  <input
                    name="color"
                    type="radio"
                    class="
                      appearance-none
                      w-3
                      h-3
                      border border-gray-300
                      rounded-full
                      outline-none
                      cursor-pointer
                      checked:bg-[#41B883]
                    "
                    id="male"
                    value="male"
                    checked
                    v-model="userData.gender"
                  />
                  <label class="ml-2 text-sm" for="red-color">Male</label>
                </div>
                <div class="flex items-center mr-4">
                  <input
                    name="color"
                    type="radio"
                    class="
                      appearance-none
                      w-3
                      h-3
                      border border-gray-300
                      rounded-full
                      outline-none
                      cursor-pointer
                      checked:bg-[#41B883]
                    "
                    id="female"
                    value="female"
                    v-model="userData.gender"
                  />
                  <label class="ml-2 text-sm" for="blue-color">Female</label>
                </div>
              </div>
            </div>

            <div>
              <label class="text-sm text-gray-600 inline-block" for="color"
                >Priority</label
              >
              <div class="flex relative w-full">
                <select
                  class="
                    block
                    appearance-none
                    w-full
                    bg-white
                    rounded-md
                    pl-4
                    py-3
                    pr-8
                    cursor-pointer
                    focus:outline-none
                    border border-gray-300
                    hover:border-gray-400
                  "
                  id="priority"
                  v-model="selectedPriority"
                >
                  <option  v-for="priority in priorities" :key="priority" :value="priority" > {{ priority }} </option>
                </select>
                <div
                  class="
                    pointer-events-none
                    absolute
                    inset-y-0
                    right-0
                    flex
                    items-center
                    px-2
                    text-[#41B883]
                  "
                >
                  <svg
                    class="fill-current h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div>
            <button
              type="submit"
              class="
                group
                relative
                w-full
                flex
                justify-center
                py-2
                px-4
                border border-transparent
                text-sm
                font-medium
                rounded-md
                text-white
                bg-[#41B883]
                hover:bg-[#41B883]
                focus:outline-none
                focus:ring-2
                focus:ring-offset-2
                focus:ring-[#41B883]
              "
            >
              <span class="absolute left-0 inset-y-0 flex items-center pl-3">
              </span>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>

    <div class="max-w-sm mx-auto flex flex-col pb-10" v-if="isSubmitted">
      <hr />
      <h2 class="text-center text-xl font-bold">Your Data</h2>
      <hr />
      <p>Mail: {{ userData.email }}</p>
      <p>Password: {{ userData.password }}</p>
      <p>Age: {{ userData.age }}</p>
      <p style="white-space: pre-line;">Message: {{ userData.message }} </p>
      <p><strong>Send Mail?</strong></p>
      <ul class="pl-10">
        <li v-for="item in userData.sendMail" :key="item"> {{ item }} </li>
      </ul>
      <p>Gender: {{ userData.gender }} </p>
      <p>Priority: {{ selectedPriority }} </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userData: {
        email: "",
        password: "",
        age: 0,
        message : '',
        sendMail:[],
        gender : 'Male'
      },
      selectedPriority : 'Medium',
      priorities: ['High', 'Medium', 'Low'],
      isSubmitted : false
    };
  },
  methods: {
      formSubmit(){
          this.isSubmitted = true;
          this.$http.post('https://jsonplaceholder.typicode.com/posts',{
            Email : this.userData.email,
            Password : this.userData.password,
            Age : this.userData.age,
            Message : this.userData.message,
            Sendmail : this.userData.sendMail,
            Gender : this.userData.gender,
            SelectedPriority : this.selectedPriority

          }).then((data) => {
            console.log(data)
          })
      }
  },
  unmounted() {
      console.log('Unmounted')
  },
};
</script>

<style>
</style>