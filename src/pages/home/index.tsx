import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="items-centerw-full flex min-h-screen flex-col justify-center">
      <main className="container mx-auto flex h-full w-full items-center justify-center px-4 sm:px-0">
        {/*  */}
        <section className="mx-auto flex w-full max-w-[600px] flex-col gap-4 py-8">
          <h1 className="text-center text-3xl font-bold">
            You Be Fit - Assessment Tool
          </h1>

          <img className="rounded-xl" src="weightlift.jpg" alt="weigthlift" />

          <p>
            Welcome to You Be Fit! Our tool helps you assess your overall
            fitness with quick and easy tests. Use tools like the BMI
            Calculator, Strength Test, Flexibility Test, and Endurance Test to
            start improving your health today.
          </p>

          <Link to="/dashboard" className="w-full">
            <Button className="w-full">Start Now!</Button>
          </Link>
        </section>
      </main>
    </div>
  );
}

export default HomePage;
