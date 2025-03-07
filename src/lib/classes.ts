export const classes = {
    album: {
        side: {
            topClass: 'flex gap-x-[1.5vh] min-w-[35vh] md:w-auto', //top class
            h1: 'font-medium text-[2.5vh] md:text-[3vh] lg:text-[2.5vh]', //title
            h3: 'font-light text-[2.2vh] md:text-[2.5vh] lg:text-[2vh] opacity-70 ', //artist
            image: 'size-[7vh] md:size-[8.5vh] lg:size-[6.5vh]', //cover
        }, //album style for component Side.astro
        home: {
            topClass: '',
            h1: 'text-[3.5vh] font-bold leading-none',
            h3: 'text-[2.5vh]',
            image: 'w-full h-auto aspect-square'
        } //album style for page Home.astro
    }
}