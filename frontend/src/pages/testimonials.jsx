import React from 'react';
import 'flowbite';
import { Carousel } from 'flowbite-react';
import fin from "../assets/img/fin.jpg"
import mozilla from "../assets/img/mozilla.jpg"
import hindi from "../assets/img/hindi.jpg"
import telugu from "../assets/img/telugu.jpg"
function Testimonials() {


    // let slideIndex = 1;
    // showSlide(slideIndex);

    // // change slide with the prev/next button
    // function moveSlide(moveStep) {
    //     showSlide(slideIndex += moveStep);
    // }

    // // change slide with the dots
    // function currentSlide(n) {
    //     showSlide(slideIndex = n);
    // }

    // function showSlide(n) {
    //     let i;
    //     const slides = document.getElementsByClassName("slide");
    //     const dots = document.getElementsByClassName('dot');

    //     if (n > slides.length) { slideIndex = 1 }
    //     if (n < 1) { slideIndex = slides.length }

    //     // hide all slides
    //     for (i = 0; i < slides.length; i++) {
    //         slides[i].classList.add('hidden');
    //     }

    //     // remove active status from all dots
    //     for (i = 0; i < dots.length; i++) {
    //         dots[i].classList.remove('bg-yellow-500');
    //         dots[i].classList.add('bg-green-600');
    //     }

    //     // show the active slide
    //     slides[slideIndex - 1].classList.remove('hidden');

    //     // highlight the active dot
    //     dots[slideIndex - 1].classList.remove('bg-green-600');
    //     dots[slideIndex - 1].classList.add('bg-yellow-500');
    // }


    return (
        <div className=' bg-[url("https://source.unsplash.com/1600x800/?dark")] '>
            <div className=" mx-[5%] font-bold text-[370%] text-white">Upcoming Events:</div>
            <div className=" mx-[5%] text-[320%] text-white mb-[1%]">Don't miss out !</div>


            <div className="h-[150vh] sm:h-[60vh] md:h-[60vh]">
                <Carousel className='' slide={false}>


                    <div className="">
                        <div className="mx-[6%] my-[3%] sm:flex ">
                            <img className=' rounded-full mr-[2%]' src={hindi} width="300px" alt="" />
                            <div className=" self-center ">
                                <div className="  font-extrabold text-[200%] text-slate-300">RangOtsav</div>
                                <div className="text-white">We, the Hindi Club at VIT Bhopal, cordially invite you to an exciting and colourful Holi event.

                                    Holi, a festival of colours, as understood in the common parlance, is much beyond the festival of colours. It represents the human indomitable spirit and determination to stand against any evil. On the occasion of Holi, we are organizing a ranga-rang event   "Rang-Mahotsav" for you all.

                                    Have a look at what is in it for you!

                                    Events include cultural as well as literary activities like dance, music and poetry. DJ-music as well as exciting games like Make A Mark, Rang-   ताक्षरी , Bollywood quizzes, etc. will be conducted. Traditional Indian snacks and drinks would be served for everyone to enjoy.

                                    Come dressed in white, and leave with colours all bright.

                                    Date:07th March 2022
                                    Time: 09 am - 01 pm
                                    Venue: Playground
                                    Entry Fees: 250/-

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="mx-[6%] my-[3%] sm:flex ">
                            <img className=' rounded-full mr-[2%]' src={telugu} width="300px" height="300px" alt="" />
                            <div className=" self-center ">
                                <div className="  font-extrabold text-[200%] text-slate-300">VIVAAN 2.0</div>
                                <div className="text-white">We are thrilled to announce the much-awaited cultural fest, VIVAAN'24, organized by the Telugu Club of our university. This fest promises a day filled with vibrant cultural celebrations and electrifying entertainment.
                                    UGADI'24:

                                    Date: 21-03-2024
                                    Time: 9:00 AM onwards
                                    Venue: Open Air Auditorium

                                    Upon reaching the auditorium, we will commence with a traditional pooja and offer our prayers to the deities, followed by captivating singing and dance performances. Get ready to participate in thrilling games like sack race, matka phod, tug of war, and more! As a token of our appreciation for honoring our Telugu culture, each student will receive UGADI Pachadi.

                                    VIVAAN'24 :

                                    Date: 21-03-2024
                                    Time: 3:30 PM - 7:00 PM
                                    Venue: Football Ground
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="">
                        <div className="mx-[6%] my-[3%] sm:flex ">
                            <img className=' rounded-full mr-[2%] ' src={fin} width="300px" alt="" />
                            <div className=" self-center ">
                                <div className="  font-extrabold text-[200%] text-slate-300">FinGenAI </div>
                                <div className="text-white">Discover the boundless possibilities of finance fused with the ingenuity of Generative AI through FinGenAI! 🚀 Immerse yourself in an exhilarating expedition where financial acumen intertwines with coding prowess.
                                    Don’t miss out on this opportunity to delve into a realm of innovation.
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="">
                        <div className="mx-[6%] my-[3%] sm:flex ">
                            <img className=' rounded-full mr-[2%]' src={fin} width="300px" alt="" />
                            <div className=" self-center ">
                                <div className="  font-extrabold text-[200%] text-slate-300">Sourabh Kr Gupta</div>
                                <div className="text-white">: According to sourabh this project is very convenient to use as well as this project will help students in building community among them. Points supporting this fact are:
                                    •	Fosters a sense of community within the college as students engage in transactions with their peers.
                                    •	Encourages collaboration and communication among students, promoting a supportive campus environment.
                                    •	Provides a convenient and localized marketplace for students, saving time and effort in finding and purchasing needed items.
                                    •	Eliminates the need for external platforms, making the buying and selling process more tailored to the specific needs of the college community.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="mx-[6%] my-[3%] sm:flex ">
                            <img className=' rounded-full mr-[2%]' src={mozilla} width="300px" alt="" />
                            <div className=" self-center ">
                                <div className="  font-extrabold text-[200%] text-slate-300">Ashita Verma</div>
                                <div className="text-white">According to Ashita this project is basically customized for college life as well as it will provide financial literacy among student. Point supporting this facts are:
                                    •	Tailors the marketplace to the unique needs of college students, such as textbooks, course materials, and dormitory essentials.
                                    •	Offers a platform where students can find items relevant to their academic and personal needs.
                                    •	Encourages students to manage their finances responsibly by budgeting and making informed purchasing decisions.
                                    •	Provides a practical opportunity for students to learn about the value of their possessions and the economic principles of buying and selling.
                                </div>
                            </div>
                        </div>
                    </div>
                </Carousel>
            </div>


            {/* <div id="indicators-carousel" class="relative" data-carousel="static">

                <div class="relative h-56 overflow-hidden rounded-lg md:h-96">

                    <div class="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-0 z-20" data-carousel-item="active">
                        
                        <div className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                            <div className="mx-[6%] my-[3%] sm:flex ">
                                <img className=' rounded-full mr-[2%]' src="https://source.unsplash.com/300x300/?profile" alt="" />
                                <div className=" self-center ">
                                    <div className="  font-extrabold text-[200%] text-slate-300">TANUSH CHAUDHARY</div>
                                    <div className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod et quisquam id quae expedita, qui debitis fuga itaque vero veniam ipsa omnis provident vel saepe voluptates iste iure eligendi quasi officia optio ipsum consectetur neque corporis doloribus. Deserunt earum sed itaque pariatur fugit, qui ducimus assumenda accusamus iusto rem voluptate! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime iste placeat nesciunt explicabo ab sit accusantium voluptatem, iure, quibusdam aut exercitationem excepturi porro fuga ut!</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-full z-10" data-carousel-item>
                        <div className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                            <div className="mx-[6%] my-[3%] sm:flex ">
                                <img className=' rounded-full mr-[2%]' src="https://source.unsplash.com/300x300/?profile" alt="" />
                                <div className=" self-center ">
                                    <div className="  font-extrabold text-[200%] text-slate-300">UDIT ANAND</div>
                                    <div className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod et quisquam id quae expedita, qui debitis fuga itaque vero veniam ipsa omnis provident vel saepe voluptates iste iure eligendi quasi officia optio ipsum consectetur neque corporis doloribus. Deserunt earum sed itaque pariatur fugit, qui ducimus assumenda accusamus iusto rem voluptate! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime iste placeat nesciunt explicabo ab sit accusantium voluptatem, iure, quibusdam aut exercitationem excepturi porro fuga ut!</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="hidden duration-700 ease-in-out absolute inset-0 transition-all transform" data-carousel-item>
                        <div className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                            <div className="mx-[6%] my-[3%] sm:flex ">
                                <img className=' rounded-full mr-[2%]' src="https://source.unsplash.com/300x300/?profile" alt="" />
                                <div className=" self-center ">
                                    <div className="  font-extrabold text-[200%] text-slate-300">JOSHI</div>
                                    <div className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod et quisquam id quae expedita, qui debitis fuga itaque vero veniam ipsa omnis provident vel saepe voluptates iste iure eligendi quasi officia optio ipsum consectetur neque corporis doloribus. Deserunt earum sed itaque pariatur fugit, qui ducimus assumenda accusamus iusto rem voluptate! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime iste placeat nesciunt explicabo ab sit accusantium voluptatem, iure, quibusdam aut exercitationem excepturi porro fuga ut!</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="hidden duration-700 ease-in-out absolute inset-0 transition-all transform" data-carousel-item>
                        <div className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                            <div className="mx-[6%] my-[3%] sm:flex ">
                                <img className=' rounded-full mr-[2%]' src="https://source.unsplash.com/300x300/?profile" alt="" />
                                <div className=" self-center ">
                                    <div className="  font-extrabold text-[200%] text-slate-300">YUVRAJ</div>
                                    <div className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod et quisquam id quae expedita, qui debitis fuga itaque vero veniam ipsa omnis provident vel saepe voluptates iste iure eligendi quasi officia optio ipsum consectetur neque corporis doloribus. Deserunt earum sed itaque pariatur fugit, qui ducimus assumenda accusamus iusto rem voluptate! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime iste placeat nesciunt explicabo ab sit accusantium voluptatem, iure, quibusdam aut exercitationem excepturi porro fuga ut!</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="duration-700 ease-in-out absolute inset-0 transition-all transform -translate-x-full z-10" data-carousel-item>
                        <div className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                            <div className="mx-[6%] my-[3%] sm:flex ">
                                <img className=' rounded-full mr-[2%]' src="https://source.unsplash.com/300x300/?profile" alt="" />
                                <div className=" self-center ">
                                    <div className="  font-extrabold text-[200%] text-slate-300">SHIVOM</div>
                                    <div className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod et quisquam id quae expedita, qui debitis fuga itaque vero veniam ipsa omnis provident vel saepe voluptates iste iure eligendi quasi officia optio ipsum consectetur neque corporis doloribus. Deserunt earum sed itaque pariatur fugit, qui ducimus assumenda accusamus iusto rem voluptate! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime iste placeat nesciunt explicabo ab sit accusantium voluptatem, iure, quibusdam aut exercitationem excepturi porro fuga ut!</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
                    <button type="button" class="w-3 h-3 rounded-full bg-white dark:bg-gray-800" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                    <button type="button" class="w-3 h-3 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                    <button type="button" class="w-3 h-3 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                    <button type="button" class="w-3 h-3 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
                    <button type="button" class="w-3 h-3 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
                </div>

                <button type="button" class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                    <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                        <span class="sr-only">Previous</span>
                    </span>
                </button>
                <button type="button" class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                    <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                        <span class="sr-only">Next</span>
                    </span>
                </button>
            </div> */}



        </div>

    )
}

export default Testimonials