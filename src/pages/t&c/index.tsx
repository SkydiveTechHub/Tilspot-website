import MainLayout from '../../layout/MainLayout'
import PageBanner from '../../components/common/PageBanner'
import { termsData } from '../../utils/data'

const TermsPage = () => {
  return (
    <div>
      <MainLayout>
      <PageBanner
          imgUrl='/images/tc.jpeg'
          title='Terms and Condition'
          desc='Get to Know More About our operational guidelines'
        />
        <div className='mt-12'>
          {/* <TitleText style='text-primary text-center font-bold text-[40px]' text='Privacy Policy'/> */}
          <div className="max-w-4xl mx-auto px-4 py-10 text-gray-800">
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-2">Terms and Conditions</h1>
              <p className="text-sm text-gray-600">Effective Date: 1st December, 2024</p>
            </div>

            <div className="space-y-8">
              {termsData.map((section, index) => (
                <section key={index}>
                  <h2 className="text-xl font-semibold mb-2">{section.title}</h2>
                  <div className="space-y-2 text-sm leading-relaxed">
                    {section.content.map((text, idx) => (
                      <p key={idx}>{text}</p>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>
        
      </MainLayout>
      
    </div>
  )
}

export default TermsPage
