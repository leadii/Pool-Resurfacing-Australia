# Skill: Update How-To Page File Tree

**Related:** This page was created using the `/admin-guide` skill from ClaudeSkills.

Use this skill to regenerate the file tree in the pool-resurfacing-guide.html admin guide when HTML files are added, removed, or renamed.

## When to Use
- After creating a new resurfacing type landing page
- After adding any new HTML page to the site
- After renaming or removing pages
- When the user asks to update or refresh the how-to page

## Instructions

1. **Scan the project for HTML files:**
   ```bash
   find . -maxdepth 1 -name "*.html" -not -name "pool-resurfacing-guide.html" | sort
   ```

2. **Categorise files into these groups:**
   - **Main Pages:** index.html, contact.html, faq.html, additional-info.html
   - **Resurfacing Type Pages:** pebblecrete.html, fibreglass.html, pool-tiling.html, quartz-aggregate.html
   - **Thank You Pages:** thanks.html, thanks-additional.html
   - **Legal & Other:** terms.html, privacy.html, 404.html, pool-resurfacing-guide.html

3. **Update the file tree section in pool-resurfacing-guide.html:**
   - Find the section between `<!-- FILE_TREE_START -->` and `<!-- FILE_TREE_END -->`
   - Replace the content with the updated file tree
   - Each file should link to `https://poolresurfacingaustralia.com.au/[filename-without-extension]`
   - index.html links to `https://poolresurfacingaustralia.com.au/`
   - Update the "Last updated" date to today's date

4. **File tree item format:**
   ```html
   <div class="file-tree-item"><a href="https://poolresurfacingaustralia.com.au/[path]" target="_blank">[filename].html</a><span>[Description]</span></div>
   ```

5. **Resurfacing page descriptions** should be the resurfacing type (e.g., "Pebblecrete resurfacing")

## Example Output

```html
<!-- FILE_TREE_START - Auto-updated by /update-howto skill -->
<div class="file-tree">
    <div class="file-tree-section">
        <div class="file-tree-title">Main Pages</div>
        <div class="file-tree-item"><a href="https://poolresurfacingaustralia.com.au/" target="_blank">index.html</a><span>Home page with pool quiz</span></div>
        <!-- ... more items -->
    </div>
    <!-- ... more sections -->
</div>
<p class="file-tree-note">Last updated: <span id="lastUpdated">[TODAY'S DATE]</span></p>
<!-- FILE_TREE_END -->
```

## After Updating
- Verify the file tree renders correctly by viewing pool-resurfacing-guide.html
- Ensure all links point to the correct production URLs
- Confirm the date has been updated
