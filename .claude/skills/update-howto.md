# Skill: Update How-To Page File Tree

Use this skill to regenerate the file tree in the how-to.html admin guide when HTML files are added, removed, or renamed.

## When to Use
- After creating a new vehicle landing page
- After adding any new HTML page to the site
- After renaming or removing pages
- When the user asks to update or refresh the how-to page

## Instructions

1. **Scan the project for HTML files:**
   ```bash
   find . -maxdepth 1 -name "*.html" -not -name "how-to.html" | sort
   ```

2. **Categorise files into these groups:**
   - **Main Pages:** index.html, contact.html, faq.html, additional-info.html
   - **Vehicle Landing Pages:** Any file with a vehicle name (e.g., nissan-patrol-y62.html, toyota-landcruiser.html)
   - **Thank You Pages:** thanks.html, thanks-additional.html
   - **Legal & Other:** terms.html, privacy.html, 404.html, how-to.html

3. **Update the file tree section in how-to.html:**
   - Find the section between `<!-- FILE_TREE_START -->` and `<!-- FILE_TREE_END -->`
   - Replace the content with the updated file tree
   - Each file should link to `https://gvmupgradesaustralia.com.au/[filename-without-extension]`
   - index.html links to `https://gvmupgradesaustralia.com.au/`
   - Update the "Last updated" date to today's date

4. **File tree item format:**
   ```html
   <div class="file-tree-item"><a href="https://gvmupgradesaustralia.com.au/[path]" target="_blank">[filename].html</a><span>[Description]</span></div>
   ```

5. **Vehicle page descriptions** should be the vehicle name (e.g., "Nissan Patrol Y62")

## Example Output

```html
<!-- FILE_TREE_START - Auto-updated by /update-howto skill -->
<div class="file-tree">
    <div class="file-tree-section">
        <div class="file-tree-title">Main Pages</div>
        <div class="file-tree-item"><a href="https://gvmupgradesaustralia.com.au/" target="_blank">index.html</a><span>Home page with vehicle quiz</span></div>
        <!-- ... more items -->
    </div>
    <!-- ... more sections -->
</div>
<p class="file-tree-note">Last updated: <span id="lastUpdated">[TODAY'S DATE]</span></p>
<!-- FILE_TREE_END -->
```

## After Updating
- Verify the file tree renders correctly by viewing how-to.html
- Ensure all links point to the correct production URLs
- Confirm the date has been updated
