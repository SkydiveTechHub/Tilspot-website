interface ButtonProps{
    text:string;
    variant: 'primary' | 'secondary' | 'tertiary' | 'green' | 'white'
}

export const Button = ({text, variant}:ButtonProps) => {
  return (
    <button 
        style={variantstyles[variant]}
        className='px-10 py-2 rounded-3xl text-[] font-bold'>
      {text}
    </button>
  )
}


const variantstyles={
    primary:{
        border: '2px solid #ffffff',
        color: '#FFFFFF',
        backgroundColor: '#0A2640',
    },
    secondary:{
        border: 'none',
        color: '#FFFFFF',
        backgroundColor: 'transparent',
    },
    tertiary:{
        border: '2px solid #0A2640',
        color: '#0A2640',
        backgroundColor: 'transparent',
    },
    white:{
        border: '2px solid #0A2640',
        color: '#0A2640',
        backgroundColor: 'white',
    },
    green:{
        border: '2px solid #69E6A6',
        color: '#0A2640',
        backgroundColor: '#65E4A3',
    },
}
