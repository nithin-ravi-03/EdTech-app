import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { FiCreditCard, FiCheckCircle, FiLock, FiShield } from 'react-icons/fi'

const PaymentPage = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [paymentMethod, setPaymentMethod] = useState('card')
  const [isProcessing, setIsProcessing] = useState(false)
  const [isCompleted, setIsCompleted] = useState(false)
  
  // Get course data from location state or use default values
  const course = location.state?.course || {
    id: 1,
    title: "Selected Course",
    category: "Category",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    setIsProcessing(true)
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false)
      setIsCompleted(true)
      
      // Redirect to courses after successful payment
      setTimeout(() => {
        navigate('/courses')
      }, 3000)
    }, 2000)
  }
  
  if (isCompleted) {
    return (
      <div className="py-12 bg-gray-50 min-h-screen">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-md p-8 text-center">
            <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
              <FiCheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold mb-4">Payment Successful!</h1>
            <p className="text-xl text-gray-600 mb-6">
              Thank you for enrolling in {course.title}. You now have full access to the course.
            </p>
            <button 
              onClick={() => navigate('/courses')}
              className="btn btn-primary"
            >
              Back to Courses
            </button>
          </div>
        </div>
      </div>
    )
  }
  
  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Complete Your Enrollment</h1>
          <p className="text-xl text-gray-600">
            You're just one step away from accessing the course
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Course Summary */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-bold mb-4">Course Summary</h2>
              <div className="mb-4">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-lg font-bold">{course.title}</h3>
                <p className="text-sm text-gray-600">{course.category}</p>
              </div>
              <div className="border-t pt-4">
                <div className="flex justify-between mb-2">
                  <span>Course Price</span>
                  <span>${course.price?.toFixed(2) || "49.99"}</span>
                </div>
                <div className="flex justify-between mb-2 text-green-600">
                  <span>Discount</span>
                  <span>-$0.00</span>
                </div>
                <div className="flex justify-between font-bold text-lg border-t pt-2">
                  <span>Total</span>
                  <span>${course.price?.toFixed(2) || "49.99"}</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Payment Form */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-bold mb-4">Payment Method</h2>
              
              {/* Payment Method Selection */}
              <div className="mb-6">
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <button
                    onClick={() => setPaymentMethod('card')}
                    className={`p-4 border rounded-lg flex flex-col items-center justify-center ${paymentMethod === 'card' ? 'border-primary-600 bg-primary-50' : 'border-gray-200'}`}
                  >
                    <FiCreditCard className={`h-6 w-6 mb-2 ${paymentMethod === 'card' ? 'text-primary-600' : 'text-gray-500'}`} />
                    <span className={paymentMethod === 'card' ? 'text-primary-600 font-medium' : 'text-gray-500'}>Credit Card</span>
                  </button>
                  <button
                    onClick={() => setPaymentMethod('paypal')}
                    className={`p-4 border rounded-lg flex flex-col items-center justify-center ${paymentMethod === 'paypal' ? 'border-primary-600 bg-primary-50' : 'border-gray-200'}`}
                  >
                    <span className={`text-xl font-bold mb-2 ${paymentMethod === 'paypal' ? 'text-primary-600' : 'text-gray-500'}`}>P</span>
                    <span className={paymentMethod === 'paypal' ? 'text-primary-600 font-medium' : 'text-gray-500'}>PayPal</span>
                  </button>
                  <button
                    onClick={() => setPaymentMethod('bank')}
                    className={`p-4 border rounded-lg flex flex-col items-center justify-center ${paymentMethod === 'bank' ? 'border-primary-600 bg-primary-50' : 'border-gray-200'}`}
                  >
                    <span className={`text-xl font-bold mb-2 ${paymentMethod === 'bank' ? 'text-primary-600' : 'text-gray-500'}`}>B</span>
                    <span className={paymentMethod === 'bank' ? 'text-primary-600 font-medium' : 'text-gray-500'}>Bank Transfer</span>
                  </button>
                </div>
              </div>
              
              {/* Payment Form */}
              <form onSubmit={handleSubmit}>
                {paymentMethod === 'card' && (
                  <>
                    <div className="mb-4">
                      <label htmlFor="cardName" className="block text-sm font-medium text-gray-700 mb-1">Name on Card</label>
                      <input 
                        type="text" 
                        id="cardName" 
                        className="input" 
                        placeholder="John Doe" 
                        required 
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">Card Number</label>
                      <input 
                        type="text" 
                        id="cardNumber" 
                        className="input" 
                        placeholder="1234 5678 9012 3456" 
                        required 
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <label htmlFor="expiry" className="block text-sm font-medium text-gray-700 mb-1">Expiry Date</label>
                        <input 
                          type="text" 
                          id="expiry" 
                          className="input" 
                          placeholder="MM/YY" 
                          required 
                        />
                      </div>
                      <div>
                        <label htmlFor="cvc" className="block text-sm font-medium text-gray-700 mb-1">CVC</label>
                        <input 
                          type="text" 
                          id="cvc" 
                          className="input" 
                          placeholder="123" 
                          required 
                        />
                      </div>
                    </div>
                  </>
                )}
                
                {paymentMethod === 'paypal' && (
                  <div className="text-center p-6">
                    <p className="mb-4 text-gray-600">You will be redirected to PayPal to complete your payment.</p>
                    <div className="text-4xl font-bold text-blue-500 mb-4">PayPal</div>
                  </div>
                )}
                
                {paymentMethod === 'bank' && (
                  <div className="mb-4">
                    <p className="mb-4 text-gray-600">Please use the following details to make your bank transfer:</p>
                    <div className="bg-gray-50 p-4 rounded">
                      <p className="mb-2"><span className="font-medium">Account Name:</span> Auro Education Inc.</p>
                      <p className="mb-2"><span className="font-medium">Account Number:</span> 1234567890</p>
                      <p className="mb-2"><span className="font-medium">Bank Name:</span> International Banking Corporation</p>
                      <p><span className="font-medium">Reference:</span> Your email address</p>
                    </div>
                    <p className="mt-4 text-sm text-gray-500">Please note: Access will be granted once payment is confirmed.</p>
                  </div>
                )}
                
                <div className="flex items-center mb-6">
                  <FiShield className="h-5 w-5 text-gray-400 mr-2" />
                  <span className="text-sm text-gray-500">Your payment information is secure and encrypted</span>
                </div>
                
                <button 
                  type="submit" 
                  className="btn btn-primary w-full"
                  disabled={isProcessing}
                >
                  {isProcessing ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                      <FiLock className="mr-2" /> Pay Now ${course.price?.toFixed(2) || "49.99"}
                    </span>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PaymentPage