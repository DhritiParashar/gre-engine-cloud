import json
from sqlalchemy import text

GRE_GENERAL_QUESTIONS = [
    # --- QUANTITATIVE REASONING (QUANTITATIVE COMPARISON + PROBLEM SOLVING) ---
    {
        "q_code": "GRE-QR-QC-001",
        "source_tag": "GRE_GENERAL_OFFICIAL",
        "section": "QUANT_CORE",
        "topic": "Quant • Quantitative Comparison (Algebra & Circles)",
        "exam_tags": "GRE_GENERAL",
        "q_type": "MCQ",
        "difficulty": "164–170 Band",
        "prompt": "x and y are integers such that x^2 + y^2 = 25 and x > y.\n\nQuantity A: x + y\nQuantity B: 5",
        "options": [
            "Quantity A is greater.",
            "Quantity B is greater.",
            "The two quantities are equal.",
            "The relationship cannot be determined from the information given."
        ],
        "answer": "3",
        "explanation": "Integer pairs (x, y) with x^2 + y^2 = 25 and x > y include (4, 3) => x + y = 7 (> 5), and (3, -4) => x + y = -1 (< 5). Since both directions occur, choose (D).",
        "is_pyq": False, "pyq_year": "2026", "pyq_exam": "GRE General"
    },
    {
        "q_code": "GRE-QR-QC-002",
        "source_tag": "GRE_GENERAL_OFFICIAL",
        "section": "QUANT_CORE",
        "topic": "Quant • Quantitative Comparison (Standard Deviation)",
        "exam_tags": "GRE_GENERAL",
        "q_type": "MCQ",
        "difficulty": "160–165 Band",
        "prompt": "Set S consists of 7 consecutive odd integers whose median is m, where m > 10.\n\nQuantity A: The standard deviation of Set S\nQuantity B: The standard deviation of the set obtained by multiplying each element of S by -1",
        "options": [
            "Quantity A is greater.",
            "Quantity B is greater.",
            "The two quantities are equal.",
            "The relationship cannot be determined from the information given."
        ],
        "answer": "2",
        "explanation": "Multiplying every element by -1 reflects all points across 0 without changing pairwise distances from the mean. Both standard deviations are identical -> (C).",
        "is_pyq": False, "pyq_year": "2026", "pyq_exam": "GRE General"
    },
    {
        "q_code": "GRE-QR-QC-003",
        "source_tag": "GRE_GENERAL_OFFICIAL",
        "section": "QUANT_CORE",
        "topic": "Quant • Quantitative Comparison (Fractions in (0,1))",
        "exam_tags": "GRE_GENERAL",
        "q_type": "MCQ",
        "difficulty": "163–169 Band",
        "prompt": "0 < x < 1\n\nQuantity A: x^2 + x^3\nQuantity B: x + x^4",
        "options": [
            "Quantity A is greater.",
            "Quantity B is greater.",
            "The two quantities are equal.",
            "The relationship cannot be determined from the information given."
        ],
        "answer": "1",
        "explanation": "Quantity B - Quantity A = (x - x^2) - (x^3 - x^4) = x(1 - x)(1 - x^2) > 0 for all 0 < x < 1. Thus Quantity B is greater -> (B).",
        "is_pyq": False, "pyq_year": "2026", "pyq_exam": "GRE General"
    },
    {
        "q_code": "GRE-QR-PS-001",
        "source_tag": "GRE_GENERAL_OFFICIAL",
        "section": "QUANT_CORE",
        "topic": "Quant • Problem Solving & Numeric Entry (Exponents)",
        "exam_tags": "GRE_GENERAL",
        "q_type": "SA_NUMERIC",
        "difficulty": "164–170 Band",
        "prompt": "[Numeric Entry] If 3^(2x - 1) + 3^(2x) = 324, what is the exact decimal value of x?",
        "options": [],
        "answer": "2.5",
        "explanation": "Factor out 3^(2x - 1) * (1 + 3) = 324 => 3^(2x - 1) = 81 = 3^4 => 2x - 1 = 4 => x = 2.5.",
        "is_pyq": False, "pyq_year": "2026", "pyq_exam": "GRE General"
    },
    {
        "q_code": "GRE-QR-PS-002",
        "source_tag": "GRE_GENERAL_OFFICIAL",
        "section": "QUANT_CORE",
        "topic": "Quant • Data Analysis & Normal Distribution",
        "exam_tags": "GRE_GENERAL",
        "q_type": "MCQ",
        "difficulty": "160–166 Band",
        "prompt": "In a normally distributed dataset with mean 500 and standard deviation 80, approximately what percent of observations lie between 420 and 660?",
        "options": ["68.0%", "81.5%", "84.0%", "95.0%", "97.5%"],
        "answer": "1",
        "explanation": "420 is -1 SD (34% below mean) and 660 is +2 SD (34% + 13.5% = 47.5% above mean). Total = 34% + 47.5% = 81.5%.",
        "is_pyq": False, "pyq_year": "2026", "pyq_exam": "GRE General"
    },

    # --- VERBAL REASONING (TEXT COMPLETION, SENTENCE EQUIVALENCE, ACADEMIC RC) ---
    {
        "q_code": "GRE-VR-TC-001",
        "source_tag": "GRE_GENERAL_OFFICIAL",
        "section": "VARC",
        "topic": "Verbal • Text Completion (1-Blank Contextual Logic)",
        "exam_tags": "GRE_GENERAL",
        "q_type": "MCQ",
        "difficulty": "163–169 Band",
        "prompt": "Although the biographer's exhaustive archival research was widely praised for its empirical rigor, her reluctance to adjudicate between conflicting eyewitness accounts rendered the final narrative frustratingly ________.",
        "options": ["noncommittal", "tendentious", "panegyrical", "aphoristic", "pellucid"],
        "answer": "0",
        "explanation": "Pivot 'Although' contrasts empirical rigor with reluctance to adjudicate between conflicting accounts -> 'noncommittal' (refusing to take a stand).",
        "is_pyq": False, "pyq_year": "2026", "pyq_exam": "GRE General"
    },
    {
        "q_code": "GRE-VR-SE-001",
        "source_tag": "GRE_GENERAL_OFFICIAL",
        "section": "VARC",
        "topic": "Verbal • Sentence Equivalence (Synonym Pairs)",
        "exam_tags": "GRE_GENERAL",
        "q_type": "MCQ",
        "difficulty": "164–170 Band",
        "prompt": "Despite the CEO's public assurances that the merger would proceed seamlessly, internal memos revealed a culture of ________ among senior vice presidents regarding incompatible software infrastructures. (Identify the matching ETS synonym pair)",
        "options": [
            "trepidation / apprehension",
            "nonchalance / alacrity",
            "complicity / hubris",
            "trepidation / hubris",
            "apprehension / nonchalance"
        ],
        "answer": "0",
        "explanation": "'Despite public assurances' signals internal unease/anxiety: 'trepidation' and 'apprehension' form the exact ETS synonym pair.",
        "is_pyq": False, "pyq_year": "2026", "pyq_exam": "GRE General"
    }
]

def seed_gre_general_postgres(engine):
    with engine.begin() as conn:
        conn.execute(text("DELETE FROM ipm_questions WHERE exam_tags NOT LIKE '%GRE_GENERAL%'"))
        upsert_sql = text("""
            INSERT INTO ipm_questions
              (q_code, source_tag, section, topic, exam_tags, q_type, difficulty, prompt, options_json, answer, explanation, is_pyq, pyq_year, pyq_exam)
            VALUES
              (:q_code, :source_tag, :section, :topic, :exam_tags, :q_type, :difficulty, :prompt, :options_json, :answer, :explanation, :is_pyq, :pyq_year, :pyq_exam)
            ON CONFLICT (q_code) DO UPDATE SET
              section = EXCLUDED.section,
              topic = EXCLUDED.topic,
              exam_tags = EXCLUDED.exam_tags,
              q_type = EXCLUDED.q_type,
              difficulty = EXCLUDED.difficulty,
              prompt = EXCLUDED.prompt,
              options_json = EXCLUDED.options_json,
              answer = EXCLUDED.answer,
              explanation = EXCLUDED.explanation,
              is_pyq = EXCLUDED.is_pyq,
              pyq_year = EXCLUDED.pyq_year,
              pyq_exam = EXCLUDED.pyq_exam
        """)
        for q in GRE_GENERAL_QUESTIONS:
            conn.execute(upsert_sql, {
                "q_code": q["q_code"],
                "source_tag": q["source_tag"],
                "section": q["section"],
                "topic": q["topic"],
                "exam_tags": q["exam_tags"],
                "q_type": q["q_type"],
                "difficulty": q["difficulty"],
                "prompt": q["prompt"],
                "options_json": json.dumps(q["options"]),
                "answer": str(q["answer"]),
                "explanation": q["explanation"],
                "is_pyq": bool(q["is_pyq"]),
                "pyq_year": q["pyq_year"],
                "pyq_exam": q["pyq_exam"],
            })