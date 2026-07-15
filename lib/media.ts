export interface MediaItem {
  type: 'image' | 'video'
  src: string
  alt?: string
  caption?: string
  frameless?: boolean
}

export const MEDIA: MediaItem[] = [
  { type: 'image', src: '/memories/photos/1.jpeg', caption: 'Eres mi sol, mi luz de cada día' },
  { type: 'image', src: '/memories/photos/2.jpeg', caption: 'Tu sonrisa me desarma por completo' },
  { type: 'image', src: '/memories/photos/3.jpeg', caption: 'Contigo el mundo es mejor lugar' },
  { type: 'image', src: '/memories/photos/4.jpeg', caption: 'No hay nadie que me haga tan feliz' },
  { type: 'image', src: '/memories/photos/5.jpeg', caption: 'Me enamoro de ti cada segundo' },
  { type: 'image', src: '/memories/photos/6.jpeg', caption: 'Tu mirada me hace temblar' },
  { type: 'image', src: '/memories/photos/7.jpeg', caption: 'Eres mi persona favorita en el universo' },
  { type: 'image', src: '/memories/photos/8.jpeg', caption: 'Tu amor me da alas para volar' },
  { type: 'video', src: '/memories/videos/1.mp4', caption: 'El sonido de tu risa es mi canción favorita' },
  { type: 'image', src: '/memories/photos/9.jpeg', caption: 'Tu paz me hace sentir que todo está bien' },
  { type: 'image', src: '/memories/photos/10.jpeg', caption: 'Tus abrazos tienen el poder de sanarme' },
  { type: 'image', src: '/memories/photos/11.jpeg', caption: 'Eres mi refugio cuando el mundo pesa' },
  { type: 'image', src: '/memories/photos/12.jpeg', caption: 'Cada día a tu lado es un regalo' },
  { type: 'image', src: '/memories/photos/13.jpeg', caption: 'Tu voz es lo más bonito que escucho' },
  { type: 'image', src: '/memories/photos/14.jpeg', caption: 'No sabes cuánto te necesito' },
  { type: 'image', src: '/memories/photos/15.jpeg', caption: 'Eres lo más bonito que tengo en la vida' },
  { type: 'image', src: '/memories/photos/16.jpeg', caption: 'Tu forma de mirar me enamora cada vez' },
  { type: 'image', src: '/memories/photos/17.jpeg', caption: 'Eres mi hogar, mi lugar seguro' },
  { type: 'image', src: '/memories/photos/19.jpeg', caption: 'Tu presencia me da paz y felicidad' },
  { type: 'image', src: '/memories/photos/20.jpeg', caption: 'Me encanta todo de ti, absolutamente todo' },
  { type: 'video', src: '/memories/videos/2.mp4', caption: 'Cada video tuyo me hace sonreír como tonto' },
  { type: 'image', src: '/memories/photos/21.jpeg', caption: 'Tu amor me hace sentir invencible' },
  { type: 'video', src: '/memories/videos/3.mp4', caption: 'Tu voz es mi melodía favorita' },
  { type: 'image', src: '/memories/photos/23.jpeg', caption: 'Eres lo más valioso que tengo' },
  { type: 'image', src: '/memories/photos/24.jpeg', caption: 'Contigo aprendí lo que es amar de verdad' },
  { type: 'video', src: '/memories/videos/4.mp4', caption: 'No hay distancia que borre lo que siento por ti' },
  { type: 'image', src: '/memories/photos/25.jpeg', caption: 'Te amo con todo lo que soy' },
]
