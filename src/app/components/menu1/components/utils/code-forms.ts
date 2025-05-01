export enum FormTemplates {
  FORM_VERTICAL = `
<div class="mb-5">
  <label for="name" class="block text-sm mb-2">Nombre Completo</label>
  <input
    id="name"
    type="text"
    pInputText
    class="w-full p-3 rounded-md bg-white text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
  />
</div>
<div class="mb-5">
  <label for="email" class="block text-sm mb-2">Email</label>
  <input
    id="email"
    type="email"
    pInputText
    class="w-full p-3 rounded-md bg-white text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
  />
</div>
<div class="mb-5">
  <label for="age" class="block text-sm mb-2">Edad</label>
  <input
    id="age"
    type="number"
    pInputText
    class="w-full p-3 rounded-md bg-white text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
  />
</div>
<div>
  <label for="city" class="block text-sm mb-2">Ciudades</label>
  <p-select
    [options]="cities"
    optionLabel="name"
    placeholder="Select a City"
    class="w-full"
  ></p-select>
</div>
`,
  FORM_VERTICAL_GRID = `<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <!-- Primera fila -->
      <div class="mb-5">
        <label for="firstname" class="block text-sm mb-2">Firstname</label>
        <input
          pInputText
          id="firstname"
          type="text"
          class="w-full p-3 rounded-md bg-white text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        />
      </div>
      <div class="mb-5">
        <label for="lastname" class="block text-sm mb-2">Lastname</label>
        <input
          pInputText
          id="lastname"
          type="text"
          class="w-full p-3 rounded-md bg-white text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        />
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <!-- Segunda fila -->
      <div class="mb-5">
        <label for="input1" class="block text-sm mb-2">Input 1</label>
        <input
          pInputText
          id="input1"
          type="text"
          class="w-full p-3 rounded-md bg-white text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        />
      </div>
      <div class="mb-5">
        <label for="input2" class="block text-sm mb-2">Input 2</label>
        <input
          pInputText
          id="input2"
          type="text"
          class="w-full p-3 rounded-md bg-white text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        />
      </div>
      <div class="mb-5">
        <label for="dropdown" class="block text-sm mb-2">Dropdown</label>
        <p-select
          [options]="cities"
          optionLabel="name"
          placeholder="Select a City"
          class="w-full"
        ></p-select>
      </div>
    </div> `,

  // Agregar los demás templates aquí
}
