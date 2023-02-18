function transform(xml_to_transform) {
    const xsltStylesheet = document.getElementById('stylesheet').textContent;
    const parser = new DOMParser();
    const xsltStylesheetNode = parser.parseFromString(xsltStylesheet, 'text/xml');

    const xsltProcessor = new XSLTProcessor();
    xsltProcessor.importStylesheet(xsltStylesheetNode);

    const xmlString = document.getElementById(xml_to_transform).textContent;
    const xmlDocument = parser.parseFromString(xmlString, 'text/xml');

    const transformedString = new XMLSerializer().serializeToString(
        xsltProcessor.transformToDocument(xmlDocument),
    );

    return transformedString;
};