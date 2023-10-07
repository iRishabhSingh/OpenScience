import ChatButton from "./ChatButton";
import { Select, SelectItem } from "@nextui-org/react";
import { Input, User, Textarea } from "@nextui-org/react";

import { Card, CardFooter, Image, Button } from "@nextui-org/react";

const Projects = () => {
  const CardBox = (img, text) => {
    <Card isFooterBlurred radius="lg" className="border-none">
      <Image
        alt=""
        className="object-cover"
        height={200}
        src={img}
        width={200}
      />
      <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="text-tiny text-white/80">{text}</p>
        <Button
          className="text-tiny text-white bg-black/20"
          variant="flat"
          color="default"
          radius="lg"
          size="sm"
        >
          Notify me
        </Button>
      </CardFooter>
    </Card>;
  };
  return (
    <>
      <ChatButton />
      <div className="overflow-auto">
        <div className=" flex flex-col pl-5 pr-5">
          <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
            <div className="-m-1 flex flex-wrap items-center justify-around md:-m-2">
              <div className="flex w-1/2 flex-wrap">
                <div className="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center transition duration-300 ease-in-out"
                    src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
                  />
                </div>
              </div>
              <div className="flex w-1/3 flex-wrap absolute-right-0">
                <div className="flex flex-col gap-4">
                  <h1 className="text-2xl font-bold left-9 ml-5">
                    &quot;Global Climate Observations Initiative (GCOI)&quot;
                  </h1>
                  <div className="flex w-2/3">
                    <Select label="Domain" className="max-w-xs">
                      <SelectItem key="ML" value="Machine learning">
                        Machine learning
                      </SelectItem>
                      <SelectItem key="ML" value="Machine learning">
                        HTML
                      </SelectItem>
                      <SelectItem key="ML" value="Machine learning">
                        MERN
                      </SelectItem>
                      <SelectItem key="ML" value="Machine learning">
                        SCALA
                      </SelectItem>
                      <SelectItem key="ML" value="Machine learning">
                        FRONTEND
                      </SelectItem>
                    </Select>
                  </div>
                  <div className="flex w-2/3">
                    <Input type="text" label="Skill" />
                  </div>
                  <div className="flex w-2/3">
                    <Input type="text" label="Expertise" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col p-20 mt-[2rem]">
            <p className="text-4xl mb-3 font-bold">Project Description</p>
            <p className="text-lg mt-3 lg:mr-4 font-light text-justify">
              The &quot;Global Climate Observations Initiative (GCOI)&quot; is a
              pioneering open science project dedicated to monitoring,
              understanding, and mitigating the impact of climate change on a
              global scale. With a community of scientists, researchers, and
              concerned citizens from around the world, GCOI exemplifies the
              principles of open science, collaboration, and data sharing to
              address one of the most pressing challenges of our time: climate
              change.
            </p>
            <p className="text-lg mt-3 lg:mr-4 font-light text-justify">
              1. Comprehensive Climate Data Collection: GCOI aims to collect,
              curate, and openly share a vast array of climate data, including
              temperature readings, sea-level measurements, greenhouse gas
              concentrations, and extreme weather event records.
              <br />
              2. Advanced Climate Modeling: The project employs state-of-the-art
              climate models, powered by artificial intelligence and machine
              learning, to predict future climate trends and assess their impact
              on ecosystems and human societies.
              <br />
              3. Collaborative Research: GCOI serves as a global hub for
              interdisciplinary collaboration, bringing together climatologists,
              meteorologists, oceanographers, environmentalists, and
              policymakers to exchange ideas and findings. <br />
              4. Public Engagement: The initiative emphasizes the importance of
              public engagement and education. It provides accessible climate
              data and tools for individuals, students, and educators to raise
              awareness and empower informed decision making.
            </p>
          </div>
          <div className="flex flex-col p-20 mt-[2rem]">
            <p className="text-4xl mb-3 font-bold">Objective (Optional)</p>
            <p className="text-lg mt-3 lg:mr-4 font-light text-justify">
              The GCOI project has already made a significant impact on the
              global understanding of climate change. Its comprehensive data
              collection and analysis have contributed to more accurate climate
              models, informed policy decisions, and a growing public awareness
              of the urgent need to address climate-related challenges. GCOI
              continues to drive innovation and inspire action on a global
              scale.
            </p>
            <div className="w-15 my-5">
              <Button variant="shadow" color="primary">
                Looking For Collaborator
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </Button>
            </div>
          </div>
          <div className="flex flex-col p-20 mt-[2rem]">
            <h2 className="text-xl font-bold left-9 mr-5 mt-6">
              &quot;What makes you suitable for project?&quot;
            </h2>
            <form className="pr-10">
              <div className="mt-5 mb-4 border border-gray-200 rounded-lg bg-gray-50">
                <div className="px-4 py-2 bg-white rounded-t-lg">
                  <label htmlFor="comment" className="sr-only">
                    Your comment
                  </label>
                  <textarea
                    id="comment"
                    rows="4"
                    className="focus:outline-none w-full px-0 text-sm  bg-white border-0 focus:ring-0  dark:placeholder-gray-400"
                    placeholder="Write a comment..."
                    required
                  ></textarea>
                </div>
                <div className="flex items-center justify-between px-3 py-2 border-t">
                  <Button color="primary">Apply</Button>
                </div>
              </div>
            </form>
          </div>
          <div className="flex flex-col p-20 mt-[2rem]">
            <h2 className="text-xl font-bold left-9 mr-5 mt-6">Created By</h2>
            <div className="mt-10 divide-x">
              <User
                name="Jane Doe"
                description="Product Designer"
                avatarProps={{
                  src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
                }}
                className="mt-4"
              />
              {/* <div className="flex min-w-0 gap-x-4 ">
                  <svg
                    className="h-8 w-8 text-black"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                    />
                  </svg>
                  <p className="text-lg font-semibold leading-6 text-gray-900">
                    Projects
                  </p>
                </div>
                <div className="flex min-w-0 gap-x-4 ">
                  <svg
                    className="h-8 w-8 text-black"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                    />
                  </svg>
                  <p className="text-lg font-semibold leading-6 text-gray-900">
                    Collaborations
                  </p>
                </div> */}
              <div className="flex items-center space-x-1 mt-4">
                <p className="text-lg font-semibold leading-6 text-gray-900">
                  Give Rating:
                </p>
              </div>
              <form className="bg-white rounded-lg border p-2 mt-4 w-auto">
                <Textarea
                  variant="faded"
                  label="Feedback"
                  labelPlacement="outside"
                  placeholder="Enter your description"
                  className="col-span-12 md:col-span-6 mb-6 md:mb-0 max-w-[400px]"
                />
                <div className="flex justify-start">
                  <Button color="primary">Submit</Button>
                </div>
              </form>
            </div>
          </div>
          {
            //suggested Projects;
          }
          <div className="flex border justify-around mt-4">
            <Card isFooterBlurred radius="lg" className="border-none">
              <Image
                alt="Woman listing to music"
                className="object-cover"
                height={200}
                src="https://tecdn.b-cdn.net/img/new/standard/nature/182.jpg"
                width={200}
              />
              <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                <p className="text-tiny text-white/80">Available soon.</p>
                <Button
                  className="text-tiny text-white bg-black/20"
                  variant="flat"
                  color="default"
                  radius="lg"
                  size="sm"
                >
                  Notify me
                </Button>
              </CardFooter>
            </Card>
            <Card isFooterBlurred radius="lg" className="border-none">
              <Image
                alt="Woman listing to music"
                className="object-cover"
                height={200}
                src="https://tecdn.b-cdn.net/img/new/standard/nature/182.jpg"
                width={200}
              />
              <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                <p className="text-tiny text-white/80">Available soon.</p>
                <Button
                  className="text-tiny text-white bg-black/20"
                  variant="flat"
                  color="default"
                  radius="lg"
                  size="sm"
                >
                  Notify me
                </Button>
              </CardFooter>
            </Card>
            <Card isFooterBlurred radius="lg" className="border-none">
              <Image
                alt="Woman listing to music"
                className="object-cover"
                height={200}
                src="https://tecdn.b-cdn.net/img/new/standard/nature/182.jpg"
                width={200}
              />
              <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                <p className="text-tiny text-white/80">Available soon.</p>
                <Button
                  className="text-tiny text-white bg-black/20"
                  variant="flat"
                  color="default"
                  radius="lg"
                  size="sm"
                >
                  Notify me
                </Button>
              </CardFooter>
            </Card>
            <Card isFooterBlurred radius="lg" className="border-none">
              <Image
                alt="Woman listing to music"
                className="object-cover"
                height={200}
                src="https://tecdn.b-cdn.net/img/new/standard/nature/182.jpg"
                width={200}
              />
              <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                <p className="text-tiny text-white/80">Available soon.</p>
                <Button
                  className="text-tiny text-white bg-black/20"
                  variant="flat"
                  color="default"
                  radius="lg"
                  size="sm"
                >
                  Notify me
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
