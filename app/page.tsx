import Image from 'next/image'

export default function Home() {
  async function saveCourse(formData: FormData) {
    "use server"
    console.log("teste")
  }
  return (
    <div>
      <form>
        <button formAction={saveCourse} className="">Salvar</button>
      </form>
    </div>

  )
}
