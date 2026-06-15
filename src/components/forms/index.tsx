import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { PostcodeLookup } from "./fields/PostcodeLookup";


export default function Form() {
    return(
        <section className="section form-wrapper">
            <form className="form">
                <div className="form__titles">
                <p className="font-extrabold text-4xl center">Request a Free Brochure</p>
                <p className="text-gray-500 center text-xl">Complete the form to receive a free brochure in the post</p>
                </div>
                <fieldset className="input-wrapper">
                    <label htmlFor="product" className="font-medium">Which product are you interested in?<span className="required text-red-500">*</span></label> 
                    <select name="product" id="product" className="text-gray-500">
                        <option value="scooters">Scooters</option>
                        <option value="chairs">Chairs</option>
                    </select>
                </fieldset>
                <div className="form__row">
                    <fieldset className="input-wrapper">
                        <label htmlFor="title" className="font-medium">Title<span className="required text-red-500">*</span></label> 
                        <select name="title" id="title" className="text-gray-500">
                            <option value="">Title</option>
                            <option value="Mr">Mr</option>
                            <option value="Mrs">Mrs</option>
                            <option value="Ms">Ms</option>
                            <option value="Miss">Miss</option>
                        </select>
                    </fieldset>
                    <fieldset className="input-wrapper">
                        <label htmlFor="surname" className="font-medium">Surname<span className="required text-red-500">*</span></label> 
                        <input type="text" name="surname" id="surname" placeholder="Enter surname" className="text-gray-500"/>
                    </fieldset>
                </div>
                <PostcodeLookup />
                <fieldset className="input-wrapper">
                    <label htmlFor="postcode" className="font-medium">Postcode<span className="required text-red-500">*</span></label> 
                    <input type="zip" name="postcode" id="postcode" placeholder="Enter postcode" className="text-gray-500"/>
                </fieldset>
                <fieldset className="input-wrapper">
                    <label htmlFor="phone" className="font-medium">Phone number<span className="required text-red-500">*</span></label> 
                    <input type="tel" name="phone" id="phone" placeholder="Enter phone number" className="text-gray-500"/>
                </fieldset>
                <fieldset className="input-wrapper">
                    <label htmlFor="email" className="font-medium">Email<span className="required text-red-500">*</span></label> 
                    <input type="email" name="email" id="email" placeholder="Enter email" className="text-gray-500"/>
                </fieldset>
                <fieldset className="checkbox-wrapper">
                    <label>
                        <div className="checkbox-control">
                        <input
                            type="checkbox"
                            id="third-party"
                            // checked={checked}
                            // onChange={handleChange}
                            aria-label="Opt out of third-party offers"
                        />
                        <span className="checkbox-icon" aria-hidden="true">
                            ✓
                        </span>
                        </div>
                        <span className="checkbox-label">
                        Tick this box if you would prefer <strong>NOT</strong> to receive
                        offers from carefully selected third parties. To learn more, please
                        read our{' '}
                        <Link href={'/'} target="_blank" rel="noopener noreferrer">
                            privacy policy
                        </Link>
                        .
                        </span>
                    </label>
                </fieldset>
                <div className="form__actions">
                    <button type="submit" className="group flex items-center justify-center gap-2 rounded-full px-4 py-2 tracking-tight bg-red-500 text-white cursor-pointe w-fill">
                        Free Brochure Request
                        <ArrowRight className="size-4 -rotate-45 transition-all ease-out group-hover:ml-3 group-hover:rotate-0" />
                    </button>
                </div>
                
            </form>
        </section>
    )
}