type FAQItem = {
  question: string;
  answer: string;
};

type FAQSectionProps = {
  title: string;
  description: string;
  items: FAQItem[];
};

export function FAQSection({ title, description, items }: FAQSectionProps) {
  return (
    <section id="faq" className="scroll-mt-28 py-6 md:py-8">
      <div className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-medium md:text-3xl">{title}</h2>
          <p className="max-w-3xl text-sm text-muted-foreground md:text-base">
            {description}
          </p>
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          {items.map((item) => (
            <div
              key={item.question}
              className="rounded-xl border border-border/70 bg-secondary/20 px-3 py-3"
            >
              <p className="text-sm font-medium">{item.question}</p>
              <p className="mt-1 text-sm text-muted-foreground">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
