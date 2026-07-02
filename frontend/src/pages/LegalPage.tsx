import { ArrowLeft } from "lucide-react";
import { AppLink } from "../components/AppLink";
import type { LegalDocument } from "../data/legal";

type LegalPageProps = {
  document: LegalDocument;
};

export function LegalPage({ document }: LegalPageProps) {
  return (
    <>
      <section className="page-hero page-hero--legal">
        <div className="container legal-hero">
          <span className="eyebrow">{document.eyebrow}</span>
          <h1>{document.title}</h1>
          <p>{document.intro}</p>
        </div>
      </section>

      <section className="section legal-section">
        <div className="container legal-layout">
          <AppLink className="legal-back button button--ghost" to="/">
            <ArrowLeft size={18} />
            Назад
          </AppLink>

          <article className="legal-card">
            {document.sections.map((section) => (
              <section className="legal-block" key={section.title}>
                <h2>{section.title}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </section>
            ))}
          </article>
        </div>
      </section>
    </>
  );
}
