import toysImage from '../assets/toys.png'

export function HomePage() {
    return (
        <section className='home-page'
            style={{ marginTop: '3em' }
            }>

            <img src={toysImage} />
        </section >
    )
}