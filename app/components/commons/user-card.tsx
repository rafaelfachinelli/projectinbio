import Image from 'next/image'
import { Github, Instagram, Linkedin, Twitter, Plus } from 'lucide-react'
import Button from '@/app/components/ui/button'

export default function UserCard() {
  const icons = [Github, Instagram, Linkedin, Twitter, Plus]

  return (
    <div className="w-[348px] flex flex-col gap-5 items-center p-5 border border-white border-opacity-10 bg-[#121212] rounded-3xl text-white">
      <div className="size-48">
        <Image
          src="/me.webp"
          alt="Rafa Dev"
          className="rounded-full object-cover w-full h-full"
          width={192}
          height={192}
        />
      </div>
      <div className="flex flex-col gap-2 w-full">
        <div className="flex items-center gap-2">
          <h3 className="text-3xl font-bold min-w-0 overflow-hidden">
            Rafa Dev
          </h3>
        </div>
      </div>
      <p className="opacity-40">&quot;Eu faço produtos para a Internet&quot;</p>
      <div className="flex flex-col gap-2 w-full">
        <span className="uppercase text-xs font-medium">Links</span>
        <div className="flex gap-3">
          {icons.map((Icon, index) => (
            <button
              key={index}
              className="p-3 rounded-xl bg-[#1e1e1e] hover:bg-[#2e2e2e] transition-colors"
            >
              <Icon />
            </button>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-3 w-full h-[172px]">
        <div className="w-full flex flex-col items-center gap-3">
          <Button className="w-full">Template SaaS - Compre Agora</Button>
          <button className="p-3 rounded-xl bg-[#1e1e1e] hover:bg-[#2e2e2e] transition-colors">
            <Plus />
          </button>
        </div>
      </div>
    </div>
  )
}
