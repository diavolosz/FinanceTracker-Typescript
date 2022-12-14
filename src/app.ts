

const anchor = document.querySelector('a')!
// note how the anchor has a HTMLAnchorElement


const form = document.querySelector('.new-item-form')
// note how 'form' here is an element not a HTMLFormElement like 
// the anchor text. thats because TS doesnt know the element 
// if we are looking for the class name not the element type

const formWithType = document.querySelector('.new-item-form') as HTMLFormElement
// by specifiying this, we can specify it as a type now 


const typeInput = document.querySelector('#type') as HTMLSelectElement
const toFromInput = document.querySelector('#tofrom') as HTMLInputElement
const detailsInput = document.querySelector('#details') as HTMLInputElement
const amountInput = document.querySelector('#amount') as HTMLInputElement


form?.addEventListener('submit', (e: Event) => {
  e.preventDefault()

  console.log(typeInput.value)
  console.log(toFromInput.value)
  console.log(detailsInput.value)
  console.log(amountInput.valueAsNumber)
})


class Invoice {
  client: string;
  details: string;
  amount: number;

  constructor(c: string, d: string, a: number) {
    this.client = c;
    this.details = d;
    this.amount = a;
  }

  format() {
    return `${this.client} owes $${this.amount} for ${this.details}`
  }
}

const inv1 = new Invoice('michael', 'painting the vase', 300)
const inv2 = new Invoice('sam', 'cleaning the floor', 150)

let invoices: Invoice[] = []
