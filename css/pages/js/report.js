/* =========================================
   CIVIC OS — REPORT PAGE JAVASCRIPT
   ========================================= */

let selectedCategory = "";


/* =========================================
   PAGE INITIALIZATION
   ========================================= */

document.addEventListener("DOMContentLoaded", () => {

    setupCategorySelection();
    setupPhotoPreview();

});


/* =========================================
   CATEGORY SELECTION
   ========================================= */

function setupCategorySelection() {

    const categories = document.querySelectorAll(".category-option");

    categories.forEach(category => {

        category.addEventListener("click", () => {

            categories.forEach(item => {
                item.classList.remove("selected");
            });

            category.classList.add("selected");

            selectedCategory =
                category.querySelector("strong").textContent;

        });

    });

}


/* =========================================
   PHOTO SELECTION
   ========================================= */

function setupPhotoPreview() {

    const photoInput =
        document.getElementById("issuePhoto");

    const uploadBox =
        document.querySelector(".upload-box");

    if (!photoInput || !uploadBox) {
        return;
    }

    photoInput.addEventListener("change", () => {

        if (photoInput.files.length === 0) {
            return;
        }

        const file = photoInput.files[0];

        uploadBox.querySelector("strong").textContent =
            file.name;

        uploadBox.querySelector("small").textContent =
            "Photo selected successfully";

    });

}


/* =========================================
   AI ANALYSIS
   ========================================= */

function analyzeIssue() {

    const description =
        document.getElementById("issueDescription").value.trim();

    const location =
        document.getElementById("issueLocation").value.trim();

    const result =
        document.getElementById("analysisResult");


    /* Basic validation */

    if (!selectedCategory) {

        alert("Please select a problem category.");

        return;
    }


    if (!description) {

        alert("Please describe the problem.");

        return;
    }


    if (!location) {

        alert("Please enter the location.");

        return;
    }


    /* Show analysis */

    result.style.display = "block";


    /*
       DEMO AI ANALYSIS

       This is simulated for the hackathon MVP.
       Later we can connect a real AI model/API.
    */

    let category = selectedCategory;

    let priority = "Medium";

    let confidence = "91%";

    let department = "Civic Services";

    let summary =
        "The reported issue has been analyzed and classified as a civic service problem.";


    /* Category-based analysis */

    if (selectedCategory === "Roads") {

        category = "Road Infrastructure";
        priority = "High";
        confidence = "94%";
        department = "Public Works";

        summary =
            "The report appears to describe a road infrastructure issue that may require inspection and repair.";

    }


    else if (selectedCategory === "Garbage") {

        category = "Waste Management";
        priority = "Medium";
        confidence = "92%";
        department = "Sanitation Department";

        summary =
            "The report appears to involve waste collection or sanitation services.";

    }


    else if (selectedCategory === "Streetlights") {

        category = "Public Lighting";
        priority = "Medium";
        confidence = "93%";
        department = "Public Lighting";

        summary =
            "The report appears to involve a public lighting problem that may require technical inspection.";

    }


    else if (selectedCategory === "Water") {

        category = "Water Services";
        priority = "High";
        confidence = "90%";
        department = "Water Supply Department";

        summary =
            "The report appears to involve a water supply or public water infrastructure issue.";

    }


    else if (selectedCategory === "Public Health") {

        category = "Public Health";
        priority = "High";
        confidence = "89%";
        department = "Health Department";

        summary =
            "The report may require attention from the relevant public health authority.";

    }


    else if (selectedCategory === "Education") {

        category = "Education Services";
        priority = "Medium";
        confidence = "88%";
        department = "Education Department";

        summary =
            "The report appears to involve an education-related civic service.";

    }


    else if (selectedCategory === "Environment") {

        category = "Environmental Services";
        priority = "Medium";
        confidence = "90%";
        department = "Environment Department";

        summary =
            "The report appears to involve an environmental issue requiring local attention.";

    }


    /* Update result */

    document.getElementById("resultCategory").textContent =
        category;

    document.getElementById("resultPriority").textContent =
        priority;

    document.getElementById("resultConfidence").textContent =
        confidence;

    document.getElementById("resultDepartment").textContent =
        department;

    document.getElementById("resultSummary").textContent =
        summary;


    /* Scroll to result */

    result.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}


/* =========================================
   SUBMIT REPORT
   ========================================= */

function submitReport() {

    alert(
        "Your civic report has been submitted successfully!"
    );

}
