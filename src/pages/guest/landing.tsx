import { TextEffect } from '@/components/ui/text-effect';
import { Tilt } from '@/components/ui/tilt';
function LandingPage() {

  return (
    <>
    <TextEffect per='char' preset='fade'>
        Animate your ideas with motion-primitives, dguig aejgaebtg biabgeg ajbgfaegbaegb aoegojabgaejb ajogaeojgboj b
    </TextEffect>
    <Tilt className='border border-red-500 w-[270px]' rotationFactor={8} isRevese>
      <div
        style={{
          borderRadius: '12px',
        }}
        className='flex max-w-[270px] flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900'
      >
        <img
          src='https://images.beta.cosmos.so/f7fcb95d-981b-4cb3-897f-e35f6c20e830?format=jpeg'
          alt='Ghost in the shell - Kôkaku kidôtai'
          className='h-48 w-full object-cover'
        />
        <div className='p-2'>
          <h1 className='font-mono leading-snug text-zinc-950 dark:text-zinc-50'>
            Ghost in the Shell
          </h1>
          <p className='text-zinc-700 dark:text-zinc-400'>Kôkaku kidôtai</p>
        </div>
      </div>
    </Tilt>
    </>
  )
}

export default LandingPage