import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center">
      <section className="mx-auto flex w-full max-w-[600px] flex-col gap-4">
        <h1 className="text-center text-3xl font-bold">
          You Be Fit - Assessment Tool
        </h1>

        <img className="rounded-xl" src="weightlift.jpg" alt="weigthlift" />

        <p>
          Welcome to You Be Fit! Our tool helps you assess your overall fitness
          with quick and easy tests. Use tools like the BMI Calculator, Strength
          Test, Flexibility Test, and Endurance Test to start improving your
          health today.
        </p>

        <Link to="/dashboard" className="mx-auto w-fit" tabIndex={-1}>
          <Button>Go to Dashboard</Button>
        </Link>
      </section>
    </div>
  );
}

export default HomePage;
