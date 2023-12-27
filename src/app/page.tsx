import { Complete } from '@/components/Complete';
import { DeleteTodo } from '@/components/DeleteTodo';
import { unstable_cache } from 'next/cache';
import { Created } from "@/components/Create"

async function getTodo() {

  let getData = await fetch('http://localhost:3000/api/todos')
  return getData.json()
}


const getCachedTodo = unstable_cache(
  async () => getTodo(),
  undefined,
  { tags: ['todo'], revalidate: 60 }
);


export default async function Home() {

  const { todos } = await getCachedTodo();

  return (
    <main className="p-4">

      <div className="flex flex-col space-y-1.5 p-6">
        <h3 className="font-semibold tracking-tight text-2xl">Todo List</h3>
      </div>

      <div className="p-6 space-y-4">
        {
          todos.map((item: { id: number; todo: string; completed: boolean; userId: number; }) => {

            return (
              <div key={item.id} className="w-6/12 mx-auto flex items-center justify-between">

                <h1 className="w-6/12 flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" >{item.todo} </h1>

                <div className='w-4/12 flex flex-row justify-between items-center'>

                  <DeleteTodo id={item.id} />

                  <Complete complete={item.completed} id={item.id} />

                </div>

              </div>
            )
          }
          )
        }
      </div>

      <Created />

    </main>
  )
}
