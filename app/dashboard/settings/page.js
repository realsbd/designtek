import DashboardLayout from "@/app/components/Layout/DashboardLayout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Switch } from "@/components/ui/switch";

const page = () => {
  return (
    <DashboardLayout>
      <section className="px-5 md:px-20">
        <div>
          <div className="mb-5">
            <h1 className="text-[25px] font-medium">Settings</h1>
            <p className="text-sm text-gray-shade-30">
              Manage your account settings and preferences
            </p>
          </div>

          <div className="w-full sm:w-[450px]">
            <form>
              <div>
                <h2 className="text-lg font-medium mt-3">
                  Profile information
                </h2>
                <div>
                  <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="text-sm">
                        Name, Bio, Location
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="flex flex-col gap-3">
                          <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            className="text-sm text-gray-shade-30 w-full rounded-lg border-2 focus:outline-primary-green border-solid border-gray-300 px-3 py-[8px]"
                          />

                          <div>
                            <textarea
                              placeholder="Bio"
                              className="w-full text-gray-shade-30 h-[65px] rounded-lg border-2 resize-none focus:outline-primary-green border-solid border-gray-300 px-3 py-[8px]"
                            ></textarea>
                            <p className="text-right text-primary-green text-[10px]">
                              100 Characters
                            </p>
                          </div>

                          <input
                            type="text"
                            name="location"
                            placeholder="Location"
                            className="text-sm text-gray-shade-30 w-full rounded-lg border-2 focus:outline-primary-green border-solid border-gray-300 px-3 py-[8px]"
                          />
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>

                <div>
                  <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="text-sm">
                        Personal demographic information
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="flex flex-col gap-3">
                          <select
                            name="gender"
                            className="text-sm text-gray-shade-30 w-full rounded-lg border-2 focus:outline-primary-green border-solid border-gray-300 px-3 py-[8px]"
                          >
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                          </select>

                          <input
                            type="text"
                            name="age"
                            placeholder="Age"
                            className="text-sm w-full rounded-lg border-2 focus:outline-primary-green border-solid border-gray-300 px-3 py-[8px]"
                          />
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>

                <div>
                  <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="text-sm">
                        Verification
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="flex flex-col gap-3">
                          <input
                            type="text"
                            name="security"
                            placeholder="2FA"
                            className="text-sm w-full rounded-lg border-2 focus:outline-primary-green border-solid border-gray-300 px-3 py-[8px]"
                          />
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>

              <div>
                <h2 className="text-lg font-medium mt-3">Display</h2>

                <div className="flex justify-between mt-4">
                  <label htmlFor="dark-mode" className="text-sm">
                    Dark mode
                  </label>
                  <Switch id="dark-mode" />
                </div>
              </div>

              <div>
                <h2 className="text-lg font-medium mt-3">Account</h2>

                <div>
                  <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="text-sm">
                        Delete account
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="flex flex-col gap-3">
                          <div className="text-sm flex justify-between items-center w-full rounded-lg border-2 border-solid border-gray-300 px-3 py-[8px]">
                            <p className="text-sm">Delete my account</p>
                            <input
                              type="button"
                              name="delete"
                              value="Delete"
                              className="text-sm text-white rounded-lg border-2 px-3 py-2 bg-admin-red-5"
                            />
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>

              <div>
                <h2 className="text-lg font-medium mt-3">
                  General preferences
                </h2>

                <div>
                  <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="text-sm">
                        Language
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="flex flex-col gap-3">
                          {/* Language Options */}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </DashboardLayout>
  );
};

export default page;
