import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

import { HeroHeader } from "@/components/header"
import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { ProgressiveBlur } from '@/components/ui/progressive-blur'
import { TextEffect } from './ui/text-effect'

export default function HeroSection() {
    return (
        <>
            <HeroHeader />
            <main className="overflow-x-hidden">
                <section>
                    <div className="pb-16 pt-8 md:pb-24 md:pt-16 lg:pb-40 lg:pt-32">
                        <div className="flex flex-col-reverse items-center justify-between gap-8 md:flex-row md:gap-12 md:px-[40px] xl:px-[150px]">
                            <div className="mx-auto max-w-lg text-center md:text-left md:ml-0 md:w-1/2">
                                <TextEffect per='char' preset='fade' className="mt-6 max-w-2xl text-balance text-4xl font-medium md:mt-8 md:text-5xl lg:mt-12 lg:text-6xl xl:text-7xl">
                                    Ship 10x Faster with NS
                                </TextEffect>
                                <TextEffect per='char' preset='fade' className="mt-6 max-w-2xl text-pretty text-base md:mt-8 md:text-lg">
                                    Highly customizable components for building modern websites and applications that look and feel the way you mean it.
                                </TextEffect>
                                <div className="mt-8 flex flex-col items-center justify-center gap-2 sm:flex-row md:justify-start">
                                    <Button
                                        asChild
                                        size="lg"
                                        className="px-5 text-base"
                                    >
                                        <Link to="#link">
                                            <span className="text-nowrap">Start Building</span>
                                        </Link>
                                    </Button>
                                    <Button
                                        key={2}
                                        asChild
                                        size="lg"
                                        variant="ghost"
                                        className="px-5 text-base"
                                    >
                                        <Link to="#link">
                                            <span className="text-nowrap">Request a demo</span>
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                            <img
                                className="w-40 h-40 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-[400px] lg:h-[400px] xl:w-[500px] xl:h-[500px] object-contain"
                                src="static/TSBA Logo.png"
                                alt="Abstract Object"
                            />
                        </div>
                    </div>
                </section>
                <section className="bg-background lg:mt-[-70px]">
                    <div className="group relative m-auto max-w-6xl px-6">
                        <div className="flex flex-col items-center md:flex-row">
                            <div className="md:max-w-44 md:border-r md:pr-6">
                                <p className="text-end text-sm">College Institutes</p>
                            </div>
                            <div className="relative py-6 md:w-[calc(100%-11rem)]">
                                <InfiniteSlider
                                    speedOnHover={20}
                                    speed={40}
                                    gap={112}>
                                    <div className="flex">
                                        <img
                                            className="mx-auto h-[50px] w-fit dark:invert"
                                            src="static/TSBA Logo.png"
                                            alt="Nvidia Logo"
                                            height="28"
                                            width="auto"
                                        />
                                    </div>

                                    <div className="flex">
                                        <img
                                            className="mx-auto h-[50px] w-fit dark:invert"
                                            src="static/informationtechnology.png"
                                            alt="Nvidia Logo"
                                            height="28"
                                            width="auto"
                                        />
                                    </div>

                                    <div className="flex">
                                        <img
                                            className="mx-auto h-[50px] w-fit dark:invert"
                                            src="static/shs.png"
                                            alt="Nvidia Logo"
                                            height="28"
                                            width="auto"
                                        />
                                    </div>

                                    <div className="flex">
                                        <img
                                            className="mx-auto h-4 w-fit dark:invert"
                                            src="https://html.tailus.io/blocks/customers/column.svg"
                                            alt="Column Logo"
                                            height="16"
                                            width="auto"
                                        />
                                    </div>
                                    <div className="flex">
                                        <img
                                            className="mx-auto h-4 w-fit dark:invert"
                                            src="https://html.tailus.io/blocks/customers/github.svg"
                                            alt="GitHub Logo"
                                            height="16"
                                            width="auto"
                                        />
                                    </div>
                                    <div className="flex">
                                        <img
                                            className="mx-auto h-5 w-fit dark:invert"
                                            src="https://html.tailus.io/blocks/customers/nike.svg"
                                            alt="Nike Logo"
                                            height="20"
                                            width="auto"
                                        />
                                    </div>
                                    <div className="flex">
                                        <img
                                            className="mx-auto h-5 w-fit dark:invert"
                                            src="https://html.tailus.io/blocks/customers/lemonsqueezy.svg"
                                            alt="Lemon Squeezy Logo"
                                            height="20"
                                            width="auto"
                                        />
                                    </div>
                                    <div className="flex">
                                        <img
                                            className="mx-auto h-4 w-fit dark:invert"
                                            src="https://html.tailus.io/blocks/customers/laravel.svg"
                                            alt="Laravel Logo"
                                            height="16"
                                            width="auto"
                                        />
                                    </div>
                                    <div className="flex">
                                        <img
                                            className="mx-auto h-7 w-fit dark:invert"
                                            src="https://html.tailus.io/blocks/customers/lilly.svg"
                                            alt="Lilly Logo"
                                            height="28"
                                            width="auto"
                                        />
                                    </div>

                                    <div className="flex">
                                        <img
                                            className="mx-auto h-6 w-fit dark:invert"
                                            src="https://html.tailus.io/blocks/customers/openai.svg"
                                            alt="OpenAI Logo"
                                            height="24"
                                            width="auto"
                                        />
                                    </div>
                                </InfiniteSlider>

                                <div className="bg-linear-to-r from-background absolute inset-y-0 left-0 w-20"></div>
                                <div className="bg-linear-to-l from-background absolute inset-y-0 right-0 w-20"></div>
                                <ProgressiveBlur
                                    className="pointer-events-none absolute left-0 top-0 h-full w-20"
                                    direction="left"
                                    blurIntensity={1}
                                />
                                <ProgressiveBlur
                                    className="pointer-events-none absolute right-0 top-0 h-full w-20"
                                    direction="right"
                                    blurIntensity={1}
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}